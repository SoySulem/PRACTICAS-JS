const e1=()=>{
    Swal.fire('TODITO MAL')
}

const e2=()=>{
    Swal.fire(
        'ERROR?',
        'SÍ,AJA,ERROR?',
        'MEGA ERROR'
      )
}

const e3=()=>{
    Swal.fire({
        icon: 'error',
        title: 'CARA DE BOLA...',
        text: 'ASSHH!',
        footer: 'BYEEE'
      })
}
const e4=()=>{
    Swal.fire({
        title: 'AYUDAAAAA',
        icon: 'SAL DE AQUI',
        html:
          'HOLA ' +
          'CARA DE NO SE QUE  ' +
          'JIJIJI',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'chaooooo',
        confirmButtonAriaLabel: 'howilis',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'veteeee'
      })
    }

const e5=()=>{
    Swal.fire({
        title: '¿cómo estas?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'yo ya me aburri',
        denyButtonText: `tengo sueñoooo`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('chaito', '', 'byeeee')
        } else if (result.isDenied) {
          Swal.fire('si ajammm byeeee', '', 'bla bla bla')
        }
      })
}