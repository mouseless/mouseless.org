.PHONY: install format run build

install:
	@(cd .theme && npm i && npm ci)
format:
	@(cd .theme && npx eslint . --fix)
run:
	@echo "(1) dev"
	@echo "(2) local"
	@read -p "Please select 1-2: " app ; \
	case $$app in \
		1) (cd .theme && npm run dev && cd ..) ;; \
		2) (cd .theme && npm run local && cd ..) ;; \
		*) echo "Invalid option" ;; \
	esac
build:
	@(cd .theme && npm run generate:local)
