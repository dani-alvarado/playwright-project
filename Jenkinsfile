pipeline {
    agent any

    triggers {
        // Run the pipeline every 2 hours
        cron('H */2 * * *')
    }

    environment {
        NODE_VERSION = '18.17.1' // Specify the Node.js version
    }

    stages {
        stage('Install Node.js') {
            steps {
                // Install Node.js
                script {
                    def nodeVersion = NODE_VERSION
                    sh """
                        # Download and install Node.js
                        curl -sL https://deb.nodesource.com/setup_$nodeVersion.x | bash -
                        apt-get install -y nodejs
                    """
                }
            }
        }

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
    }
}
