function mdc(dividendo, divisor) {

  if ((dividendo % divisor == 0 )){
        return divisor;
    }else{
        return mdc(divisor,(dividendo % divisor));
    }
}