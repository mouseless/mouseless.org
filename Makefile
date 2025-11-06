.PHONY: install format run build

install:
	@(cd .theme && npm i && npm ci)
format:
	@(cd .theme && npx eslint . --fix)
run:
	@echo "(1) Development"
	@echo "(2) Local"
	@read -p "Please select 1-2: " app ; \
	case $$app in \
		1) (cd .theme && npm run dev && cd ..) ;; \
		2) (cd .theme && npm run local && cd ..) ;; \
		*) echo "Invalid option" ;; \
	esac
build:
	@echo "(1) Local"
	@echo "(2) Production"
	@read -p "Please select 1-2: " app ; \
	case $$app in \
		1) (cd .theme && npm run generate:local && cd ..) ;; \
		2) (cd .theme && npm run generate:production && cd ..) ;; \
		*) echo "Invalid option" ;; \
	esac
