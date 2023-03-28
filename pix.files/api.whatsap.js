function myFunction() {
              var copyText = document.getElementById("myInput");
                copyText.select();
              copyText.setSelectionRange(0, 99999); 
              navigator.clipboard.writeText(copyText.value);
            
              alert("Clique no texto e depois em copiar");
            }

            $('#enviar_comprovante').click(function(){
                var fone = '91980261024';
                var url = 'https://api.whatsapp.com/send?phone=55'+fone+'&text=Meu%20Comprovante%20Pix:';
                window.open(url, '_blank');
            });
