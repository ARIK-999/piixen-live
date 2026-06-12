#!/usr/bin/env bash
# =============================================================================
# PIIXEN LIVE — GitHub Repository Setup Script
# Usage: bash setup-github.sh
# =============================================================================

set -e

# ── CONFIG (edit these) ───────────────────────────────────────────────────────
GITHUB_USERNAME=""          # ← Your GitHub username
REPO_NAME="piixen-live"     # ← Repository name
REPO_DESCRIPTION="PIIXEN LIVE — Modern live TV & sports streaming platform with 50+ channels, HD quality, dark/light mode, and responsive design."
REPO_TOPICS="live-tv streaming sports javascript html5 css3 responsive-design netlify"
# ─────────────────────────────────────────────────────────────────────────────

# ── Colors ───────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo ""
echo -e "${PURPLE}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║        📺  PIIXEN LIVE GitHub Setup               ║${NC}"
echo -e "${PURPLE}╚═══════════════════════════════════════════════════╝${NC}"
echo ""

# ── Pre-flight checks ─────────────────────────────────────────────────────────
if ! command -v git &> /dev/null; then
  echo -e "${RED}✗ git is not installed. Install from https://git-scm.com${NC}"
  exit 1
fi

if ! command -v gh &> /dev/null; then
  echo -e "${YELLOW}⚠ GitHub CLI (gh) not found.${NC}"
  echo "  Install from: https://cli.github.com"
  echo ""
  echo -e "${CYAN}Falling back to git + manual instructions...${NC}"
  USE_GH=false
else
  USE_GH=true
fi

# ── Prompt for username if not set ───────────────────────────────────────────
if [ -z "$GITHUB_USERNAME" ]; then
  echo -e "${YELLOW}Enter your GitHub username:${NC}"
  read -r GITHUB_USERNAME
fi

if [ -z "$GITHUB_USERNAME" ]; then
  echo -e "${RED}✗ GitHub username is required.${NC}"
  exit 1
fi

# ── Init git ─────────────────────────────────────────────────────────────────
echo -e "${BLUE}▶ Initializing git repository...${NC}"
if [ ! -d ".git" ]; then
  git init
  echo -e "${GREEN}  ✓ Git initialized${NC}"
else
  echo -e "${GREEN}  ✓ Git already initialized${NC}"
fi

# ── Update placeholder username in files ─────────────────────────────────────
echo -e "${BLUE}▶ Updating username references...${NC}"
find . -type f \( -name "*.md" -o -name "*.json" -o -name "*.yml" -o -name "*.toml" \) \
  ! -path "./.git/*" \
  ! -path "./node_modules/*" \
  -exec sed -i.bak "s/ARIK-999/${GITHUB_USERNAME}/g" {} \;
# Remove backup files
find . -name "*.bak" -delete
echo -e "${GREEN}  ✓ References updated to: ${GITHUB_USERNAME}${NC}"

# ── Stage and commit ─────────────────────────────────────────────────────────
echo -e "${BLUE}▶ Staging all files...${NC}"
git add -A
git commit -m "feat: initial release of PIIXEN LIVE v1.0.0

- 50+ live TV channels across 7 categories
- HD video player modal with fullscreen support
- Real-time channel search with debounce
- Category filter tabs
- Dark/light theme with localStorage persistence
- Fully responsive design (desktop, tablet, mobile)
- Sports category section
- Keyboard navigation support
- MIT License" 2>/dev/null || git commit --allow-empty -m "feat: initial release of PIIXEN LIVE v1.0.0"
echo -e "${GREEN}  ✓ Initial commit created${NC}"

# ── Create GitHub repo ────────────────────────────────────────────────────────
if [ "$USE_GH" = true ]; then
  echo -e "${BLUE}▶ Creating GitHub repository...${NC}"

  # Authenticate check
  if ! gh auth status &> /dev/null; then
    echo -e "${YELLOW}  You need to authenticate with GitHub CLI:${NC}"
    gh auth login
  fi

  # Create the repo
  gh repo create "$REPO_NAME" \
    --public \
    --description "$REPO_DESCRIPTION" \
    --source . \
    --remote origin \
    --push 2>/dev/null || {
      echo -e "${YELLOW}  Repo may already exist. Trying to push...${NC}"
      git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git" 2>/dev/null || \
      git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
      git branch -M main
      git push -u origin main
    }

  echo -e "${GREEN}  ✓ Repository created and pushed!${NC}"

  # ── Set topics ──────────────────────────────────────────────────────────────
  echo -e "${BLUE}▶ Setting repository topics...${NC}"
  TOPIC_ARRAY=$(echo "$REPO_TOPICS" | tr ' ' '\n' | jq -R . | jq -s .)
  gh api "repos/${GITHUB_USERNAME}/${REPO_NAME}/topics" \
    --method PUT \
    --header "Accept: application/vnd.github+json" \
    --input - <<< "{\"names\": $TOPIC_ARRAY}" 2>/dev/null && \
    echo -e "${GREEN}  ✓ Topics set${NC}" || \
    echo -e "${YELLOW}  ⚠ Topics skipped (requires jq or permissions)${NC}"

else
  # Manual fallback
  git branch -M main
  git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git" 2>/dev/null || \
    git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

  echo ""
  echo -e "${YELLOW}════════════════════════════════════════════════════${NC}"
  echo -e "${YELLOW}  Manual Steps Required:${NC}"
  echo -e "${YELLOW}════════════════════════════════════════════════════${NC}"
  echo ""
  echo "  1. Go to https://github.com/new"
  echo "  2. Repository name: ${REPO_NAME}"
  echo "  3. Description: ${REPO_DESCRIPTION}"
  echo "  4. Set to: Public"
  echo "  5. Do NOT initialize with README (you already have one)"
  echo "  6. Click 'Create repository'"
  echo ""
  echo "  Then run:"
  echo -e "  ${CYAN}git push -u origin main${NC}"
  echo ""
fi

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo -e "${PURPLE}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║  ✅  Setup Complete!                              ║${NC}"
echo -e "${PURPLE}╚═══════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${GREEN}🔗 Repository:${NC} https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo -e "  ${GREEN}🌐 Live Site:${NC}   https://piixenlivee.netlify.app/"
echo ""
echo -e "  ${CYAN}Next steps:${NC}"
echo "  • Add a repository banner image (social preview) in Settings → Social Preview"
echo "  • Enable GitHub Pages in Settings → Pages (optional)"
echo "  • Connect to Netlify for auto-deploy on push"
echo "  • Add a star ⭐ to your own repo to seed its count"
echo ""
