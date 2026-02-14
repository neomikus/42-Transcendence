.PHONY: install dev clean

# Colors
GREEN = \033[0;32m
BLUE = \033[0;34m
YELLOW = \033[0;33m
NC = \033[0m # No Color

install:
	@echo "$(GREEN)Instalando dependencias del frontend...$(NC)"
	cd frontend && npm install
	@echo "$(GREEN)✓ Dependencias instaladas$(NC)"

dev:
	@echo "$(GREEN)Iniciando servidor de desarrollo...$(NC)"
	cd frontend && npm run dev

clean:
	@echo "$(YELLOW)Limpiando node_modules...$(NC)"
	rm -rf frontend/node_modules frontend/package-lock.json
