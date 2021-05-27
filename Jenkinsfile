pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'echo "Build nodejs app"'
                sh 'whoami'
                sh 'docker build . -t rboboc11/greentube:${BRANCH_NAME}_${BUILD_NUMBER} -f Dockerfile'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Test stage"'
                sh 'docker run -d -p 4000:8080 --name greentube rboboc11/greentube:${BRANCH_NAME}_${BUILD_NUMBER}'
                sh 'docker exec greentube npm test'
                sh 'docker kill greentube'
                sh 'docker rm greentube'
            }
        }
        stage('Push image'){
            steps{
                sh 'docker push rboboc11/greentube:${BRANCH_NAME}_${BUILD_NUMBER}'
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
    post {
        always {
            echo 'Send email!'
            
            emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                to: 'rboboc11@gmail.com',
                subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"
            
            }
        }
}
