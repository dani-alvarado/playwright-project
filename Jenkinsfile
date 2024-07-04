pipeline {
    agent any

    triggers {
        // Run the pipeline every 2 hours
        cron('H */2 * * *')
    }

    environment {
        NODE_VERSION = '14' // Specify the Node.js version
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    def nodeVersion = NODE_VERSION
                    sh """
                        # Install Node.js if not already installed
                        if ! command -v node &> /dev/null
                        then
                            echo "Node.js not found, installing..."
                            curl -sL https://deb.nodesource.com/setup_$nodeVersion.x | bash -
                            apt-get install -y nodejs
                        else
                            echo "Node.js found, skipping installation."
                        fi

                        # Check Node.js version
                        node -v
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
        failure {
            script {
                currentBuild.result = 'FAILURE'
                echo "Build failed. Check the logs for more details."
            }
        }
    }
}
