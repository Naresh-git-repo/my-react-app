pipeline {
    agent any

    stages {
        stage('Build'){
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps{
                sh'''
                echo "Build Stage..."
                npm ci --prefer-offline
                npm --version
                node --version
                ls -la
                npm run build
                ls -la
                '''
            }
        }
        stage('Test') {
            agent {
                docker{
                    image 'node:20-alpine'
                    reuseNode true
                }
                }
            steps{
            sh'''
            test -f build/index.html
            npm test
            '''
            }
        }
        stage('E2E Test'){
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.39.0-jammy'
                    reuseNode true
                }
            }
            steps{
                sh'''
                npx serve
                node_modules/.bin/serve -s build &
                sleep 10
                npx playwright test
                '''
            }
        }
    }
}
