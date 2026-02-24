pipeline {
    agent any

    stages {
        stage('Build'){
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
