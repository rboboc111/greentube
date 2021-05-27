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
                sh 'echo "Build nodejs app"'
                sh 'docker build . -t rboboc11/greentube -f Dockerfile'
            }
        }
        stage('Test') {
            when{
                branch 'development'
            }
            steps {
                sh 'echo "Test stage"'
                sh 'docker run -d -p 4000:8080 rboboc11/greentube'
                sh 'docker exec 6fe npm test'
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
