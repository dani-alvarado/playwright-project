pipeline {
    agent any

    triggers {
        // Run the pipeline every 2 hours
        cron('H */2 * * *')
    }

    tools {
        // Use the configured NodeJS installation
        nodejs 'Node'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install the dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run the tests
                sh 'npm run test'
            }
        }
    }

    post {
        always {
            // Clean up the workspace
            cleanWs()
        }
        failure {
            script {
                currentBuild.result = 'FAILURE'
                echo "Build failed. Check the logs for more details."
            }
        }
    }
}
