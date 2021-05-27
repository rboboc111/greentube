pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -p 5000:5000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            when{
                branch 'development'
            }
            steps {
                sh 'echo "Build stage"'
                sh 'npm test'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Test stage"'
            }
        }
        stage('Deploy'){
            when{
                branch 'production' 
            }
            steps{
                sh 'echo "Deploy"'
            }
        }
        }
}
