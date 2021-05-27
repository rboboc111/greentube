pipeline {
    agent any
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
                sh 'cd src; npm test'
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
