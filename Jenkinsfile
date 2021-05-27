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
                sh 'whoami'
                sh 'docker build . -t rboboc11/greentube -f Dockerfile'
            }
        }
        stage('Test') {
            when{
                branch 'development'
            }
            steps {
                sh 'echo "Test stage"'
                sh 'docker run -d -p 4000:8080 --name greentube rboboc11/greentube'
                sh 'docker exec greentube npm test'
                sh 'docker kill greentube'
                sh 'docker rm greentube'
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
