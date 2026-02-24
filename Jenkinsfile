pipeline {
    agent any

    stages {
        stage('Build'){
            reuseNode:true
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
