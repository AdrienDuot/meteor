pipeline {
  agent any //{
    // node {
    //   label 'config'
    // }

  // }
  stages {
    stage('install meteor') {
      steps {
        sh 'curl -s https://install.meteor.com | sh '
        sh 'npm install'
        sh 'meteor npm i --save-dev selenium-webdriver@^3.6.0 chromedriver@^2.41.0'
        sh 'npm i --save-dev puppeteer@^1.5.0'
        sh 'meteor npm install --save bcrypt'
      }
    }

    stage('evaluate test') {
      steps {
        sh 'mkdir /tmp/artifacts'
        sh 'MOCHA_REPORTER=xunit TEST_BROWSER_DRIVER=puppeteer SERVER_MOCHA_OUTPUT=/tmp/artifacts/unit_server.xml  CLIENT_MOCHA_OUTPUT=/tmp/artifacts/unit_client.xml  meteor test --once --driver-package meteortesting:mocha'
      }
    }

    stage('store test') {
      steps {
        archiveArtifacts(artifacts: '/tmp/artifacts', allowEmptyArchive: true)
      }
    }

  }
}