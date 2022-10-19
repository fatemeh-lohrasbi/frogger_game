const time_left_display = document.querySelector('#time_left')
const result_display = document.querySelector('#result')
const start_pause_btn = document.querySelector('#start_pause_btn')
const squares = document.querySelectorAll('.grid div')
let current_index = 76; //our starting block is on 76 index
const width = 9;

function move_frog(e){
    squares[current_index].classList.remove('frog')

    switch(e.key){
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
