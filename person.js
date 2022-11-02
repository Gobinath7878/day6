class Profile{
    constructor(name,degree,fatherName,motherName,address,dob,age,job,experience){
        this.name=name;
        this.degree=degree;
        this.fatherName=fatherName;
        this.motherName=motherName;
        this.address=address;
        this.dob=dob;
        this.age=age;
        this.job=job;
        this.experience=experience;
    }
    getDetails(){
     return(`Myself ${this.name} .I did degree in ${this.degree},My father is ${this.fatherName} and my mother is ${this.motherName}. We live in ${this.address}. My DOB is ${this.dob}. My age${this.age}. I'm working as${this.job} as experience ${this.experience}`)
    }
}
const profile=new Profile("Gobinath Selvam","M.Sc","Selvam","Chindhamani","xyz city,Tamilnadu","8/5/00","22","Full stack developer","1 year")
console.log(profile.getDetails());