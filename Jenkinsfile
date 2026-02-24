pipeline {
    agent any

    stages {
        reuseNode :true
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
