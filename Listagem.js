    let produtos = localStorage.getItem("Produtos");
    produtos = JSON.parse(produtos);
    
    for(var i = 0; i < produtos.length; i ++){

      let divComTabela = document.querySelector('#flex-container-listar-produtos')
      let table = document.createElement('table');
      divComTabela.appendChild(table);
      let td_image = produtos[i].urlImage;
      let td_name = produtos[i].name;
      let td_category = produtos[i].category;
      let td_unidadeMedida = produtos[i].unitMeasurement;
      let td_localizacao = produtos[i].localization;
      let td_localizacaoUrl = produtos[i].localizationUrl;
      let td_qtdPack = produtos[i].qtyPacket;
      let td_qtdEstoque = produtos[i].qtyStock;
      let td_precoUnitario = produtos[i].price;
      let td_precoTotal = td_precoUnitario * td_qtdEstoque;

      table.innerHTML = `<hr><p id="divProdutoTitulo">PRODUTO ${i + 1}:</p><tr><td id="tr_imagens" colspan = "4"><p>Produto</p><br><img src = ${td_image}></td>
      <td id="tr_imagens" colspan = "4"><p>Localização</p><br><img src = ${td_localizacaoUrl}></td></tr>
      <tr><td><p><span id="classification">Nome:</span> ${td_name}</p></td>
      <td><p><span id="classification">Categoria:</span> ${td_category}</p></td>
      <td><p><span id="classification">Localização:</span>  ${td_localizacao}</p></td>
      <td><p><span id="classification">Quantidade no estoque:</span> ${td_qtdEstoque}</p></td>
      <td><p><span id="classification">Quantidade por packet:</span> ${td_qtdPack}</p></td>
      <td><p><span id="classifica   tion">Unidade de medida:</span> ${td_unidadeMedida}</p></td>
      <td><p><span id="classification">Preço unitário:</span> R$${td_precoUnitario}</p></td>
      <td><p><span id="classification">Preço total em estoque:</span> R$${td_precoTotal}</p></td></tr>`;
    }