const pijarFood = (price, voucher, distance, tax) =>{
    let costBreakdown = {
        price: price,
        promo: false,
        freeDeliveryFee: true,
        discount: 0,
        deliveryFee: 0,
        taxFee: 0,
        subTotal: 0
    };

    // Calculate discount from voucher
    if(price<=0 || isNaN(price)){
        throw new Error("Harga yang diinputkan salah");
    }else if(voucher==="PIJARFOOD5" && price<50000){
        console.log("Voucher tidak bisa digunakan karena pembelian kurang dari 50rb\nPromo akan dihilangkan");
    } else if(voucher==="PIJARFOOD5" && price>=50000){
        costBreakdown.promo = true;
        if(0.5*price > 50000){
            costBreakdown.discount = 50000;
        }else{
            costBreakdown.discount = 0.5*price;
        }
    } else if(voucher==="DITRAKTIRPIJAR" && price<25000){
        console.log("Voucher tidak bisa digunakan karena pembelian kurang dari 25rb\nPromo akan dihilangkan");
    } else if(voucher==="DITRAKTIRPIJAR" && price>=25000){
        costBreakdown.promo = true;
        if(0.6*price > 30000){
            costBreakdown.discount = 30000;
        } else{
            costBreakdown.discount = 0.6*price;
        }
    } else if(costBreakdown.promo === false && voucher === ""){
        console.log("Anda tidak menggunakan promo");
    } else{
        throw new Error("Kode promo salah!!!");
    }

    // Calculate delivery fee
    if(distance===2){
        costBreakdown.freeDeliveryFee = false;
        costBreakdown.deliveryFee = 5000;
    }else if(distance>2){
        costBreakdown.freeDeliveryFee = false;
        costBreakdown.deliveryFee = 5000 + ((distance-2)*3000);
    }else if(distance>0 && costBreakdown.freeDeliveryFee === true){
        console.log("gratis ongkir");
    }else{
        throw new Error("Jarak yang diinputkan salah");
    }
    
    // Calculate tax
    if(tax){
        costBreakdown.taxFee = 0.05*price;
    } else{
        costBreakdown.taxFee = 0;
    }

    // Calculate sub total
    costBreakdown.subTotal = costBreakdown.price + costBreakdown.deliveryFee + costBreakdown.taxFee - costBreakdown.discount;

    // Return the costBreakdown object value
    return costBreakdown;
}

try {
    let costBreakdown = pijarFood(30000, "DITRAKTIRPIJAR", 5, true);
    console.log(`Harga  :   ${costBreakdown.price}
Potongan    :   ${costBreakdown.discount}
Biaya Antar :   ${costBreakdown.deliveryFee}
Pajak   :   ${costBreakdown.taxFee}
SubTotal    :   ${costBreakdown.subTotal}`);    
} catch (error) {
    console.log(error.message);
}
