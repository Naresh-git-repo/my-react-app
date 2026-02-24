pipeline {
    agent any

    stages {
        stage('Build'){
            steps{
                sh'''
                echo "Build Stage..."
                npm --version
                node --version
                ls -la
                '''
            }
        }
    }
}
