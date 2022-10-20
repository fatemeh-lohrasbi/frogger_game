const time_left_display = document.querySelector('#time_left')
const result_display = document.querySelector('#result')
const start_pause_btn = document.querySelector('#start_pause_btn')
const squares = document.querySelectorAll('.grid div')
let current_index = 76; //our starting block is on 76 index
const width = 9;
const log_left = document.querySelectorAll('.log_left')
const log_right = document.querySelectorAll('.log_right')


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

function auto_move_logs() {
    log_left.forEach(element => move_log_left(element));
    log_right.forEach(element => move_log_right(element));
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

setInterval(auto_move_logs, 1000)