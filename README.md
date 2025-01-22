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

# 파일 변경 시
    1. 수정 사항 확인
        └ git status
    2. 변경 사항 추가
        └ git add [파일명]
        2-1. 변경 사항 전체 추가
            └ git add .
    3. 변경 사항 커밋
        └ git commit -m "[커밋 메시지 내용]"
    4. push
        └ git push