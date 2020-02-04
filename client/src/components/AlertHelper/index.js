saveToDatabase = () => {
    API.saveData({
      date: this.state.today,
      glucose: this.state.glucoseLevel
    })
      .then(res => {
        this.getFromDatabase();
      })

    myFunction()
    Range()
    if (this.getFromDatabase <= 100) {
      function myFunction() {
        document.getElementById("uniqueID-1", "uniqueID-4");
        element.className.remove("hide");
      }
      
      this.toggleModal()

    } else if (this.getFromDatabase >=250) {
      function myFunction() {
        document.getElementById("uniqueID-3", "uniqueID-4");
        element.className.remove("hide");
      }
      this.toggleModal()

    } else if (this.getFromDatabase) {
      function range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
      
      function myFunction() {
        document.getElementById("uniqueID-3");
        element.classList.remove("hide");
      }
    
    this.toggleModal()
    } 
    
    
    else { console.log(err) }
}
    


if (g > 100 && g <=180)