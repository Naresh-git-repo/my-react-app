pipeline {
    agent any

    stages {
        stage('Build'){
            agent {
                docker {
                    image 'node:18-alpine'
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
                '''
            }
        }
    }
}
