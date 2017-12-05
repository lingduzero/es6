class Timer {
  countdown(end, update, handle){
    const now = new Date().getTime();
    const self = this;
    if(now - end){
      handle.call(self);
    } else {
      let last_time = end - now;
      const px_d = 1000 * 60 * 60 * 24；
      const px_h = 1000 * 60 * 60;
      const px_m = 1000 * 60;
      const px_s = 1000;
      let day = Math.floor(last_time/px_d);
      let hour = Math.floor((last_time - day * px_d) / px_h);
      let minute = Math.floor((last_time - day * px_d - hour * px_h) / px_m);
      let second = Math.floor((last_time - day * px_d - hour * px_h - minute * px_m) / px_s);
      let result = [];
      if(day > 0){
        result.push(`<em>${day}</em>Day`);
      }
      if(result.length || hour > 0){
        result.push(`<em>${hour}</em>Hour`);
      }
      if(result.length || minute > 0){
        result.push(`<em>${minute}</em>Minute`);
      }
      if(result.length || second > 0){
        result.push(`<em>${second}</em>Second`);
      }
    }
    self.last_time = result.join('');
    update.call(self, result.join(''));
    setTimeout(function(){
      self.countdown(end, update, handle);
    },1000);
  }
}
