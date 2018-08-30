import { President } from "./president.model";
import { Subject } from "../../../node_modules/rxjs";


export class presidentData {
    public counter = 0; // this sets the current president to the first index in the presidentList Array.



    public changePresident = new Subject(); //This allows the app to subscribe, to "listen" for any changes request.

    public incrementPresident(value: number){ //will iterate through presidenList array, either 1 forwards or 1 backwards.
        this.counter += value;
    }

    //president objects. set to private to noone can touch these objects.
    private presidentsList: President[] = [
        {
                name: "George Washington",
                number: 1,
                dates: "1789 - 1797",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres1.jpg",
                party: "Unaffiliated",
                color: "ghostwhite",
                fact: "First President of the United States. Refused to run a third term. Set the standard for the chief executive's duties.",
            },
            {
                name: "John Adams",
                number: 2,
                dates: "1797 - 1801",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres2.jpg",
                party: "Federalist",
                color: "grey",
                fact: "First President to live in the White House. Advocated for the Alien and Sedition Acts.",
            },
            {
                name: "Thomas Jefferson",
                number: 3,
                dates: "1801 - 1809",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres3.jpg",
                party: "Democratic Republican",
                color: "purple",
                fact: "Wrote the Declaration of Independence. Approved of the Louisiana Purchase of 1803.",
            },
            {
                name: "James Madison",
                number: 4,
                dates: "1809 - 1817",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres4.jpg",
                party: "Democratic Republican",
                color: "purple",
                fact: "Considered the Father of the Bill of Rights. Led the War of 1812 against Britain in which the White House was burned down.",
            },
            {
                name: "James Monroe",
                number: 5,
                dates: "1817 - 1825",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres5.gif",
                party: "Democratic Republican",
                color: "purple",
                fact: "Created the Monroe Doctrine which declared the Americas off-limits toward European colonization.",
            },
            {
                name: "John Quincy Adams",
                number: 6,
                dates: "1825 - 1829",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres6.jpg",
                party: "Democratic Republican",
                color: "purple",
                fact: "John Adams and John Quincy Adams were the first father and son to have served as Presidents. Accused of winning through corruption.",
            },
            {
                name: "Andrew Jackson",
                number: 7,
                dates: "1829 - 1837",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres7.jpg",
                party: "Democratic",
                color: "blue",
                fact: "First President to ride a train. Greatly expanded the powers of the Presidency.",
            },
            {
                name: "Martin Van Buren",
                number: 8,
                dates: "1837 - 1841",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328648/Presidents/pres8.jpg",
                party: "Democratic",
                color: "blue",
                fact: "First American born President. His presidency had an economic depression leading to bank failures and food riots.",
            },
            {
                name: "William Henry Harrison",
                number: 9,
                dates: "1841 - 1841",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres9.jpg",
                party: "Whig",
                color: "yellow",
                fact: "First President to die in office. Delivered a long inaugural speech in which he caught a cold and died a month later.",
            },
            {
                name: "John Tyler",
                number: 10,
                dates: "1841 - 1845",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328648/Presidents/pres10.jpg",
                party: "Whig",
                color: "yellow",
                fact: "First President to be threatened with impeachment. He also had 15 kids.",
            },
            {
                name: "James K. Polk",
                number: 11,
                dates: "1845 - 1849",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres11.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Presided over the Mexican War, adding Texas and California and other territories to the United States.",
            },
            {
                name: "Zachary Taylor",
                number: 12,
                dates: "1849 - 1850",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres12.png",
                party: "Whig",
                color: "yellow",
                fact: "Kept the South from leaving the Union by threatening with force.",
            },
            {
                name: "Millard Filmore",
                number: 13,
                dates: "1850 - 1853",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres13.jpg",
                party: "Whig",
                color: "yellow",
                fact: "Approved the Comprimise of 1850 allowing slavery in the South to prevent the South from leaving the Union.",
            },
            {
                name: "Franklin Pierce",
                number: 14,
                dates: "1853 - 1857",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres14.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Supported the Kansas-Nebraska Act, ending the Compromise of 1850.",
            },
            {
                name: "James Buchanan",
                number: 15,
                dates: "1857 - 1861",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres15.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Only bachelor to ever serve in the White House. Failed to keep the South from seceding from the Union.",
            },
            {
                name: "Abraham Lincoln",
                number: 16,
                dates: "1861 - 1865",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres16.jpg",
                party: "Republican",
                color: "red",
                fact: "Led the Union during the Civil War, preserving the Nation. Ended Slavery. Assassinated while in office.",
            },
            {
                name: "Andrew Johnson",
                number: 17,
                dates: "1865 - 1869",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres17.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Only southern senator to stay loyal to the Union during the Civil War. First impeached President.",
            },
            {
                name: "Ulysses S. Grant",
                number: 18,
                dates: "1869 - 1877",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres18.jpg",
                party: "Republican",
                color: "red",
                fact: "Top military hero of the Civil War. His two terms had endless scandals.",
            },
            {
                name: "Rutherford B. Hayes",
                number: 19,
                dates: "1877 - 1881",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres19.jpg",
                party: "Republican",
                color: "red",
                fact: "Won the election by one electoral vote. His wife was the first First Lady to graduate college.",
            },
            {
                name: "James A. Garfield",
                number: 20,
                dates: "1881 - 1881",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres20.jpg",
                party: "Republican",
                color: "red",
                fact: "First left-handed President. Assassinated in while in office.",
            },
            {
                name: "Chester A. Arthur",
                number: 21,
                dates: "1881 - 1885",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres21.jpg",
                party: "Republican",
                color: "red",
                fact: "Helped create the Civil Service. Originally a lawyer. Known for being honest and responsible.",
            },
            {
                name: "Grover Cleveland",
                number: 22,
                dates: "1885 - 1889",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres22.jpg",
                party: "Democratic",
                color: "blue",
                fact: "First President to be elected two non-consecutive terms. Expanded the Civil Service.",
            },
            {
                name: "Benjamin Harrison",
                number: 23,
                dates: "1889 - 1893",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328651/Presidents/pres23.jpg",
                party: "Republican",
                color: "red",
                fact: "Strove to end the Spoils System which made him very unpopular leading to only one term.",
            },
            {
                name: "Grover Cleveland",
                number: 24,
                dates: "1893 - 1897",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres24.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Same President as Number 22. An economic depression lead to a failed second term.",
            },
            {
                name: "William McKinley",
                number: 25,
                dates: "1897 - 1901",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres25.jpg",
                party: "Republican",
                color: "red",
                fact: "Led the United States during the Spanish-American War. Assassinated while in office.",
            },
            {
                name: "Theodore Roosevelt",
                number: 26,
                dates: "1901 - 1909",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres26.jpg",
                party: "Republican",
                color: "red",
                fact: "First President to leave the US while in office. Built the Panama Canal, disrupted business monopolies.",
            },
            {
                name: "William Howard Taft",
                number: 27,
                dates: "1909 - 1913",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres27.jpg",
                party: "Republican",
                color: "red",
                fact: "Only President to become a Supreme Court Justice.",
            },
            {
                name: "Woodrow Wilson",
                number: 28,
                dates: "1913 - 1921",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres28.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Led the United States during World War I. Aided in the creation of the League of Nations.",
            },
            {
                name: "Warren G. Harding",
                number: 29,
                dates: "1921 - 1923",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres29.jpg",
                party: "Republican",
                color: "red",
                fact: "First election in which women voted. Died in office just before a corruption scandal was going public.",
            },
            {
                name: "Calvin Coolidge",
                number: 30,
                dates: "1923 - 1929",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres30.jpg",
                party: "Republican",
                color: "red",
                fact: "Presided over economic prosperity by ignoring signs that the stock market would crash.",
            },
            {
                name: "Herbert Hoover",
                number: 31,
                dates: "1929 - 1933",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328653/Presidents/pres31.jpg",
                party: "Republican",
                color: "red",
                fact: "Blamed for the Great Depression although it occured only a few months into his presidency.",
            },
            {
                name: "Franklin D. Roosevelt",
                number: 32,
                dates: "1933 - 1945",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328652/Presidents/pres32.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Lead the United States through the Great Depression and World War II. Only President to be elected 4 times.",
            },
            {
                name: "Harry S. Truman",
                number: 33,
                dates: "1945 - 1953",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328653/Presidents/pres33.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Made the decision to drop the atomic bombs, ending World War II days later. Led during the Korean War.",
            },
            {
                name: "Dwight D. Eisenhower",
                number: 34,
                dates: "1953 - 1961",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328653/Presidents/pres34.jpg",
                party: "Republican",
                color: "red",
                fact: "A decorated military general. Helped end the Korean War and presided over the start of the Cold War.",
            },
            {
                name: "John F. Kennedy",
                number: 35,
                dates: "1961 - 1963",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328653/Presidents/pres35.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Only Catholic to become President. Led the US through the Cuban Missle Crisis. Assassinated while in office.",
            },
            {
                name: "Lyndon B. Johnson",
                number: 36,
                dates: "1963 - 1969",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres36.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Sworn into office after the Kennedy assassination. Passed antipoverty and civil rights programs. Led during the Vietnam War.",
            },
            {
                name: "Richard Nixon",
                number: 37,
                dates: "1969 - 1974",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328646/Presidents/pres37.jpg",
                party: "Republican",
                color: "red",
                fact: "Improved relations with China and USSR and settled the Vietnam War. Watergate scandal lead him to be the only president to resign.",
            },
            {
                name: "Gerald Ford",
                number: 38,
                dates: "1974 - 1977",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres38.jpg",
                party: "Republican",
                color: "red",
                fact: "Only President to never be elected President or Vice President.",
            },
            {
                name: "Jimmy Carter",
                number: 39,
                dates: "1977 - 1981",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres39.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Promoted Middle East peace. Iran Hostage Crisis made him look weak and ineffectual.",
            },
            {
                name: "Ronald Reagan",
                number: 40,
                dates: "1981 - 1989",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres40.jpg",
                party: "Republican",
                color: "red",
                fact: "Credited with reviving national pride after much controversy of the 1960's and 1970's. Survived an attemped assasination.",
            },
            {
                name: "George H.W. Bush",
                number: 41,
                dates: "1989 - 1993",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres41.jpg",
                party: "Republican",
                color: "red",
                fact: "Led the United States in the 1991 Gulf War against Iraq.",
            },
            {
                name: "Bill Clinton",
                number: 42,
                dates: "1993 - 2001",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres42.jpg",
                party: "Democratic",
                color: "blue",
                fact: "Met President Kennedy at 16 years old. Passed NAFTA and cut the budget deficit. Impeached after marriage scandal.",
            },
            {
                name: "George W. Bush",
                number: 43,
                dates: "2001 - 2009",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328647/Presidents/pres43.jpg",
                party: "Republican",
                color: "red",
                fact: "Led the United States into war against Iraq after September 11 Terrorist Attacks. Presided during the Housing Market Crash.",
            },
            {
                name: "Barack Obama",
                number: 44,
                dates: "2009 - 2017",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328649/Presidents/pres44.jpg",
                party: "Democratic",
                color: "blue",
                fact: "First African American President. Lead programs to help the United States through an economic recession.",
            },
            {
                name: "Donald Trump",
                number: 45,
                dates: "2017 - Present",
                image: "http://res.cloudinary.com/dvkntryzd/image/upload/v1528328650/Presidents/pres45.jpg",
                party: "Republican",
                color: "red",
                fact: "First President to not have served in public office or military before taking office. Began as a businessman.",
            }
    ];


    public getPresidentName(){
        return this.presidentsList[this.counter].name; // returns current presidents Name.
    }

    public getPresidentNumber(){
        return this.presidentsList[this.counter].number; // returns current presidents Number.
    }

    public getPresidentDates(){
        return this.presidentsList[this.counter].dates; // returns current presidents dates they were in office.
    }

    public getPresidentImage(){
        return this.presidentsList[this.counter].image; // returns current imagePath for src.
    }

    public getPresidentParty(){
        return this.presidentsList[this.counter].party; // returns current presidents affiliated party.
    }

    public getPresidentColor(){
        return this.presidentsList[this.counter].color; // returns current presidents affiliated party colors.
    }

    public getPresidentFact(){
        return this.presidentsList[this.counter].fact; // returns current presidents facts text.
    }



}