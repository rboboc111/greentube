pipeline {
    agent {
        node {
            label 'master'
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
