// 목표: 비밀번호의 값을 입력하고 입력값이 비밀번호와 일치하면 자리를 랜덤하게 
//      배치시켜주는 프로그램 O
// 반 애들 이름 값 리스트로 저장 O
// 비밀번호 값 비교 O
// 비밀번호를 입력창에 입력되는 값을 안보이게 블러처리 O
// 비밀번호가 맞을 때 마다 리스트값을 셔플시킴 (메소드 구글링) O
// 랜덤하게 섞은 값을 페이지에 노출시킴 O
// 테이블 만들기 O
// 그 값을 자리배치대로 배치시킴 O
// modal 창 구현
// 테이블 css 꾸미기
// 배경 꾸미기
let classroom = document.getElementById("classroom")
let password = document.getElementById("password")
let resultText = document.getElementById("result-text")
let seatTable = document.getElementById("seat-table")
let testTable = document.getElementById("test-table")

resultText.addEventListener("input",valueCheck)

const passwordValue = "0330"


let ClassMembersName = ["박경민","고아라","김리혜","김유건","김지원","박상민","백강인","석혜린","김시현","양지유","조예원","박은지","이가희",
"이예린","이지윤","임나윤","장정현","최지휘","백정민","문요한"]


function randomizeSeats() {
    ClassMembersName.sort()
    console.log(ClassMembersName)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let u = 6
let s = 0
function tableMatch () {
    while( u < 24) {
        seatTable.getElementsByTagName("td")[u].innerHTML = ClassMembersName[s]
        u++
        s++
    }
}

function valueCheck() {
    const toCheck = password.value
    if (toCheck === passwordValue) {
        let arrayValue = shuffleArray(ClassMembersName)
        tableMatch()
        seatTable.getElementsByTagName("td")[27].innerHTML = ClassMembersName[19]
        seatTable.getElementsByTagName("td")[26].innerHTML = ClassMembersName[18]

    }else if(toCheck !== passwordValue) {
        alert("비밀번호가 틀렸습니다")
    }
}




