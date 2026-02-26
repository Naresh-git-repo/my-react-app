pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                echo "Build Stage..."
                npm ci --prefer-offline
                npm --version
                node --version
                npm run build
                '''
            }
        }

        stage('Tests') {
            failFast true
            parallel {

                stage('Unit Test') {
                    agent {
                        docker {
                            image 'node:20-alpine'
                            reuseNode true
                        }
                    }
                    steps {
                        sh '''
                        test -f build/index.html
                        CI=true npm test -- --watchAll=false --coverage
                        '''
                    }
                }

                stage('E2E Test') {
                    agent {
                        docker {
                            image 'mcr.microsoft.com/playwright:v1.58.2-jammy'
                            reuseNode true
                        }
                    }
                    steps {
                        sh '''
                        npx serve -s build -l 3000 &
                        npx wait-on http://localhost:3000
                        npx playwright test tests/ --reporter=junit,html --output=test-results
                        '''
                    }
                }

            }
        }
    }

    post {
    always {
        echo "Publishing Reports..."

        // Publish JUnit Results
        junit allowEmptyResults: true, testResults: 'test-results/*.xml'

        // Publish Playwright HTML Report
        publishHTML([
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
        ])

        // Archive artifacts
        archiveArtifacts artifacts: '''
            playwright-report/**,
            test-results/**,
            coverage/**
        ''', allowEmptyArchive: true
    }
}
}
}