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
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

const e5=()=>{
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}