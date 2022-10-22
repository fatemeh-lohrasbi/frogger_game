const time_left_display = document.querySelector('#time_left')
const result_display = document.querySelector('#result')
const squares = document.querySelectorAll('.grid div')
let current_index = 76; //our starting block is on 76 index
const width = 9;
const log_left = document.querySelectorAll('.log_left')
const log_right = document.querySelectorAll('.log_right')
const car_left = document.querySelectorAll('.car_left')
const car_right = document.querySelectorAll('.car_right')
const play_again_btn = document.querySelector('#play_again_btn')
play_again_btn.style.display= 'none'
let timer_id;
let current_time = 10;

function move_frog(e) {
    squares[current_index].classList.remove('frog')

    switch (e.key) {
        case 'ArrowLeft':
            if (current_index % width !== 0) current_index -= 1  // if frog is not on 0,9,18,27,36,45, ...             
            break
        case 'ArrowRight':
            if (current_index % width < width - 1) current_index += 1
            break
        case 'ArrowUp':
            if (current_index - width >= 0) current_index -= width
            break
        case 'ArrowDown':
            if (current_index + width < width * width) current_index += width
            break
    }
    squares[current_index].classList.add('frog')
}
document.addEventListener('keydown', move_frog)

function auto_move_elements() {
    current_time--;
    time_left_display.textContent = current_time
    log_left.forEach(element => move_log_left(element));
    log_right.forEach(element => move_log_right(element));
    car_left.forEach(element => move_car_left(element));
    car_right.forEach(element => move_car_right(element));
    lose()
    win()
}

function move_log_left(log_left) {
    switch (true) {
        case log_left.classList.contains('l1'):
            log_left.classList.remove('l1')
            log_left.classList.add('l2')
            break
        case log_left.classList.contains('l2'):
            log_left.classList.remove('l2')
            log_left.classList.add('l3')
            break
        case log_left.classList.contains('l3'):
            log_left.classList.remove('l3')
            log_left.classList.add('l4')
            break
        case log_left.classList.contains('l4'):
            log_left.classList.remove('l4')
            log_left.classList.add('l5')
            break
        case log_left.classList.contains('l5'):
            log_left.classList.remove('l5')
            log_left.classList.add('l1')
            break
    }
}

function move_log_right(log_right) {
    switch (true) {
        case log_right.classList.contains('l1'):
            log_right.classList.remove('l1')
            log_right.classList.add('l5')
            break
        case log_right.classList.contains('l2'):
            log_right.classList.remove('l2')
            log_right.classList.add('l1')
            break
        case log_right.classList.contains('l3'):
            log_right.classList.remove('l3')
            log_right.classList.add('l2')
            break
        case log_right.classList.contains('l4'):
            log_right.classList.remove('l4')
            log_right.classList.add('l3')
            break
        case log_right.classList.contains('l5'):
            log_right.classList.remove('l5')
            log_right.classList.add('l4')
            break
    }
}


function move_car_left(car_left) {
    switch (true) {
        case car_left.classList.contains('c1'):
            car_left.classList.remove('c1')
            car_left.classList.add('c2')
            break
        case car_left.classList.contains('c2'):
            car_left.classList.remove('c2')
            car_left.classList.add('c3')
            break
        case car_left.classList.contains('c3'):
            car_left.classList.remove('c3')
            car_left.classList.add('c1')
            break
    }
}

function move_car_right(car_right) {
    switch (true) {
        case car_right.classList.contains('c1'):
            car_right.classList.remove('c1')
            car_right.classList.add('c3')
            break
        case car_right.classList.contains('c2'):
            car_right.classList.remove('c2')
            car_right.classList.add('c1')
            break
        case car_right.classList.contains('c3'):
            car_right.classList.remove('c3')
            car_right.classList.add('c2')
            break
    }
}
function lose() {
    if (
        squares[current_index].classList.contains('c1') ||
        squares[current_index].classList.contains('l4') ||
        squares[current_index].classList.contains('l5') ||
        current_time == 0
    ) {
        result_display.textContent = 'You Lose 😥';
        clearInterval(timer_id)
        squares[current_index].classList.remove('frog')
        document.removeEventListener('keydown', move_frog)
        play_again_btn.style.display = 'block'

    }
}

function win(){
    if (
        squares[current_index].classList.contains('ending_block')) {
        result_display.textContent = 'You Win 😍';
        clearInterval(timer_id)
        document.removeEventListener('keydown', move_frog)
    }
}

play_again_btn.addEventListener('click', () => {
    location.reload();
})

timer_id = setInterval(auto_move_elements, 1000)