const { gql } = require('apollo-server');

module.exports = gql`
    scalar Date

    type Map{
        key:String!,
        value:String!
    }
    input MapInput{
        key:String!
        value:String!
      }
    type Config{
        id:ID!
        Logo:String! 
        Contact:String!
        Email:String!
        PhoneNumber:String!
        BannerBackgroundImage:String!
        Avatar:String!
        Title:String!
        UpTitle:String!
        WorkIdo:String!
        LinkFb:String!
        LinkTwitter:String!
        LinkInsta:String!
        LinkYoutube:String!
        LinkLinkedin:String!
        ButtomLinks:String! 
    }
    type AboutMe{
        id:ID!
        config: Config
        Description:String!
        DownloadCvButton:String!
    }
    type WorkedFor{
        id:ID!
        ProjectsCompleted:String!
        CupOfCoffee:String!
        SatisfiedClients:String!
        Startups:String!
    }
    type Services {
        id:ID!
        icon:ID!
        WorkTitle:[Map]
    }
    
    type Experience {
        id:ID!
        date: [Date]  
        heading:[Map]
    }
    type Recent{
        id:ID!
        Title:String!
        ProjectImage:[ID]
        Description:String!
        date:[Date]
        Link:String!
    }

    type Query{
        GetConfig:Config!
        GetAboutMe:AboutMe!
        GetWorkedFor:WorkedFor!
        GetServices:Services!
        GetService(id:ID!):Services!
        GetExperience:Experience!
        GetRecents:Recent!
        GetRecent(id:ID!):Recent!
    }

    type Mutation{
        CreateConfig(
            Logo:String!,
            Contact:String!,
            Email:String!,
            PhoneNumber:String!,
            BannerBackgroundImage:String!,
            Avatar:String!,
            Title:String!,
            UpTitle:String!,
            WorkIdo:String!,
            LinkFb:String!,
            LinkTwitter:String!,
            LinkInsta:String!,
            LinkYoutube:String!,
            LinkLinkedin:String!,
            ButtomLinks:String!
        ):Config!
        UpdateConfig(
                id:ID!,
                Logo:String,
                Contact:String,
                Email:String,
                PhoneNumber:String,
                BannerBackgroundImage:String,
                Avatar:String,
                Title:String,
                UpTitle:String,
                WorkIdo:String,
                LinkFb:String,
                LinkTwitter:String,
                LinkInsta:String,
                LinkYoutube:String,
                LinkLinkedin:String,
                ButtomLinks:String 
                ):Config!
            CreateAboutMe(
                config:ID!,
                Description:String!,
                DownloadCvButton:String!
            ):AboutMe!
            UpdateAboutMe(
                id:ID!,
                config: ID,
                Description:String,
                DownloadCvButton:String,
                ):AboutMe!
            CreateWorkedFor(
                ProjectsCompleted:String!,
                CupOfCoffee:String!,
                SatisfiedClients:String!,
                Startups:String!
            ):WorkedFor!
            UpadteWorkedFor(
                id:ID!
                ProjectsCompleted:String,
                CupOfCoffee:String,
                SatisfiedClients:String,
                Startups:String
            ):WorkedFor!
            CreateServices(
                icon:String!,
                WorkTitle:[MapInput]

            ):Services!
            UpdateServices(
                id:ID!,
                icon:ID,   
                WorkTitle:[MapInput]
            ):Services!
            CreateExperience(
                date: [Date],
                heading:[MapInput]
            ):Experience!
            UpdateExperience(
                id:ID!,
                date: [Date],
                heading:[MapInput]
            ):Experience!
            createRecent(
                Title:String!,
                ProjectImage:[String],
                Description:String!,
                date:[Date],
                Link:String!
            ):Recent!

    }
`;
