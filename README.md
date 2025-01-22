# GomBook_Front
=======
# Git 설정
    1. 현재 branch 상태 확인
        └ git branch
    2. 결과에 sgjang 브랜치가 없을 경우
        └ git checkout -b sgjang
            └ sgjang 브랜치가 없는 경우 새로 생성 및 브랜치 전환
    3. 브랜치에 커밋이 없을 경우
        └ git commit --allow-empty -m "Initial commit for sgjang branch"
            └ 최소 하나의 커밋을 만들어야 push 가능 
    4. 원격에 push
        └ git push -u origin sgjang
    5. push 후 상태 확인
        └ git branch -r
