function calcular () {
  var txtv = document.getElementById('txtvel')
  var res = document.getElementById('res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} KM/h.</strong><p>` 
    if (vel > 60){
      res.innerHTML += `Você foi <strong>multado!</strong> por excesso de velocidade. <br>`
    } else {
      res.innerHTML += `Você está trafegando dentro da velocidade permitida. Boa viagem!<br>`
    }
    res.innerHTML += `Dirija SEMPRE com cinto de segurança!`
}        