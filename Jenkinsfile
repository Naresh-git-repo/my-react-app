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
            docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            steps{
            sh'''
            test -f build/index.html
            npm test
            '''
            }
        }
    }
}
