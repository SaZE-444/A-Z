//Git & GitHub

//25/11/1(SUN)

//왜 깃허브를 통해서 버전관리를 하는가?
//
//파일은 계속 수정 될 수있고, 최종본인지 이름만으로 확인이 어렵다.
//깃에서는 누가 어떤 부분을 변경했는지 수정했는지를 알 수 있고, 협업 시 충돌을 방지할 수 있다.
//필요시 과거의 특정시점으로 rollback도 가능하다.
//브랜치를 이용해 안전하게 실험할 수 있다.


//Git을 다운로드하고 깃에 이번 깃허브 커밋을 올려보자.--->OK  
//
//My Git
//ID : SZ.saze.SZ@gmail.com
//NAME : SaZE-444
//
//termical에서
//git --version (깃 버전확인)
//git config --global --list (git전역설정확인_Git을 적용하는 사용자 설정(이름, 이메일 등) 을 확인하는 명령어)
//git config --global user.name "SaZE-444"
//git config --global user.email "SZ.saze.SZ@gmail.com" (전역 사용자 정보 설정)
//git config --global --unset user.name (설정한 값 지우는 명령어) 
//
//저장소 확인후
//
//cd ~/Desktop/폴더이름 (저장소에 저장할폴더)
//git init (git 초기화)
//git add . (모든파일 add)
//git add 폴더이름/ (폴더만 add)
//git add 폴더이름/폴더이름/파일이름.js
//git commit -m "입력할 커밋메세지" (커밋메세지입력)
//git branch -M main (브랜치 main이름으로 설정)
//git remote add origin http://github.com/SaZE-444/A-Z.git (이 저장소랑 연결)
//git push -u origin main 
//
//git remote -v (기존 origin 확인)
//git remote remove origin (origin 삭제)


//GitFork
//GitHub 로그인 후 file-open ->Stage ->Commit ->Push("add remote  저장소주소") 


//Branch 브랜치
//독립적인 작업공간
//
//  브랜치이름 = develop
//git checkpout -b develop (브랜치생성 및 사용전환)
//git pust -u origin develop (브랜치 깃허브에 생성)
//git checkout develop (브랜치 사용전환)
//git checkout - (전단계 사용 브랜치 사용전환)
//git pull origin develop (브랜치 최신버전 가져오기)
//git merge Master (Master develop이랑 합치기)
//
//브랜치는 작업 충돌예방과 작업 추적을 위해서 사용한다.


//Git 날짜 수정하기
//ex)지금 이파일은 11/1공부본이지만 11/4일에 커밋 푸시를 한다.
//11/1일로 한번 넣어보겠다.
//git remote -v (연결되어있는 저장소확인)
//git checkout (연결된 브랜치확인)
//git add .(넣을 파일)
//git status (넣을파일 확인)
//GIT_AUTHOR_DATE="2025-11-01T16:44:00"(작성날짜)
//GIT_COMMITTER_DATE="2025-11-01T16:44:44" (커밋날짜)
//GIT_AUTHOR_DATE="2025-11-01T16:44:00" GIT_COMMITTER_DATE="2025-11-01T16:44:00" git commit -m "Git & GitHub" (한줄로작성)
//git commit -m "커밋메세지"
//git push
//git reset --soft HEAD~1 (n개 커밋 이전상태로 지우기/파일은 그대로)
