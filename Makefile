start:
	cp ./package-lock.json ./app/backend/
	cp ./package-lock.json ./app/frontend/

	docker compose -f docker-compose.yml -f docker-compose.start.yml up -d --build

	rm ./apps/project-a/package-lock.json
	rm ./apps/project-b/package-lock.json

	docker rmi $$(docker images -f "dangling=true" -q)

dev:
	cp ./package-lock.json ./app/backend/
	cp ./package-lock.json ./app/frontend/

	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

	rm ./app/backend/package-lock.json
	rm ./app/frontend/package-lock.json
	
	docker rmi $$(docker images -f "dangling=true" -q)
