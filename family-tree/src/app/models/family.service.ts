





export class familyService {
    familyList = {
        aguilera: {
                    jesus: { name: "Jesus Aguilera", imgPath: "" },
                    angel: { name: "Angel Aguilera", imgPath: "" },
                    nazareth: { name: "Nazareth Aguilera", imgPath: "" },
                    jessica: { name: "Jessica Born", imgPath: "" },
                    isabel: { name: "Isabel Aguilera", imgPath: "" }
        },
        born : {
                    gevin: { name: "Gevin Born", imgPath: "" },
                    mason: { name: "Mason Born", imgPath: "" }
        },
        godoy : {
                    luis: { name: "Luis Godoy", imgPath: "" },
                    arianna: {name: "Arianna Godoy", imgPath: "" },
                    layla: {name: "Layla Godoy", imgPath: "" } 
        },
        herrera: {
                    johnsr: { name: "John Sr. Herrera", imgPath: "" },
                    johnjr: { name: "John Jr. Herrera", imgPath: "" },
                    samantha: { name: "Samantha Herrera", imgPath: "" },
                    nicole: { name: "Nicole Herrera", imgPath: "" },
                    victoria: { name: "Victoria Herrera", imgPath: "" },
                    sara: { name: "Sara Herrera", imgPath: "" }
        },
        mayorga : {
                    robert: { name: "Robert Mayorga", imgPath: "" },
                    benjamin: { name: "Benjamin Mayorga", imgPath: "" },
                    sofia: { name: "Sofia Mayorga", imgPath: "" },
                    nicolas: { name: "Nicolas Mayorga", imgPath: "" },
                    rosalie: { name: "Rosalie Mayorga", imgPath: "" }
        },
        rodriguez0: {
                    alicia: { name: "Alicia Rodriguez", imgPath: "" },
                    javiersr: {name: "Francisco Javier Rodriguez Sr.", imgPath: "" }
        },
        rodriguez1: {
                    javierjr : { name: "Francisco Javier Rodriguez Jr.", imgPath: "" },
                    jose: { name: "Jose Luis Rodriguez", imgPath: "" },
                    lucy: { name: "Lucy Salash", imgPath: "" },
                    martha: { name: "Martha Rodriguez", imgPath: "" },
                    olivia: { name: "Olivia Rodriguez", imgPath: "" },
                    rick: { name: "Ricardo Rodriguez", imgPath: "" }
        },
        rodriguez2: {
                    maria: { name: "Maria Rodriguez", imgPath: ""},
                    cecilia: { name: "Cecilia Mayorga", imgPath: "" },
                    elizabeth: { name: "Elizabeth Godoy", imgPath: "" },
                    anthony: { name: "Anthony Rodriguez", imgPath: "" }
        },
        rodriguez3: {
                    jasmine: { name: "Jasmine Rodriguez", imgPath: "" },
                    camilla: { name: "Camilla Rodriguez", imgPath: "" },
                    anastasia: { name: "Anastasia Rodriguez", imgPath: "" }
        },
        salash: {
                    jeff: { name: "Jeff Salash", imgPath: "" },
                    megan: { name: "Megan Salash", imgPath: "" }
        }
    };
    
    
    getPerson(clan: string, nameKey: string){
        return this.familyList[clan][nameKey];
    }
}