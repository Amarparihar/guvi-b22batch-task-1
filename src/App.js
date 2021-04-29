// import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  let carddetails = [
    {
      plan: "Free",
      currency: "$",
      price: 0,
      period: "month",
      offers:[
        {
          name: "Single User",
          isEnabled: true
        },
        {
          name: "5GB Storage",
          isEnabled: true
        },
        
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        
        {
          name: "Community Access",
          isEnabled: true
        },
        
        {
          name: "Unlimited Private Projects",
          isEnabled: false
        },
        
        {
          name: "Dedicated Phone Support",
          isEnabled: false
        },
        
        {
          name: "Free Subdomain",
          isEnabled: false
        },
        
        {
          name: "Monthly Status Reports",
          isEnabled: false
        }
        
      ]
    },

    {
      plan: "Plus",
      currency: "$",
      price: 9,
      period: "month",
      offers:[
        {
          name: "5 User",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        
        {
          name: "Community Access",
          isEnabled: true
        },
        
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        
        {
          name: "Monthly Status Reports",
          isEnabled: false
        }
        
      ]
    },

    {
      plan: "Pro",
      currency: "$",
      price: 49,
      period: "month",
      offers:[
        {
          name: "Unlimited User",
          isEnabled: true
        },
        {
          name: "150GB Storage",
          isEnabled: true
        },
        
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        
        {
          name: "Community Access",
          isEnabled: true
        },
        
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        
        {
          name: "Monthly Status Reports",
          isEnabled: true
        }
        
      ]
    }
  ]
  return (
    <section class="pricing py-5">
    <div class="container">
    <div class="row">
      {
        carddetails.map((items)=>{
          return <Card data={items}></Card>
        }) 
      }
    </div>
    </div>
    </section>
  );
}

export default App;

// let carddetails = [
//   {
//     plan : "Free",
//     price : 0 ,
//     period : "month",
//     currency : "$",
//     listItems : [
//       {
//         itemname: "Single User",
//         isDisabled : false
//       },

//       {
//         itemname: "5GB Storage",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Public Projects",
//         isDisabled : false
//       },
//       {
//         itemname: "Community Access",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Private Projectsr",
//         isDisabled : "true"
//       },
//       {
//         itemname: "Dedicated Phone Support",
//         isDisabled : "true"
//       },
//       {
//         itemname: "Free Subdomain",
//         isDisabled : "true"
//       },
//       {
//         itemname: "Monthly Status Reports",
//         isDisabled : "true"
//       }
      
//     ]
    


//   },

//   {
//     plan : "PLUS",
//     price : 9 ,
//     period : "month",
//     currency : "$",
//     listItems : [
//       {
//         itemname: "5 User",
//         isDisabled : false
//       },

//       {
//         itemname: "50GB Storage",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Public Projects",
//         isDisabled : false
//       },
//       {
//         itemname: "Community Access",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Private Projectsr",
//         isDisabled :false
//       },
//       {
//         itemname: "Dedicated Phone Support",
//         isDisabled : false
//       },
//       {
//         itemname: "Free Subdomain",
//         isDisabled : false
//       },
//       {
//         itemname: "Monthly Status Reports",
//         isDisabled : "true"
//       }
      
//     ]
    


//   },

//   {
//     plan : "PRO",
//     price : 49 ,
//     period : "month",
//     currency : "$",
//     listItems : [
//       {
//         itemname: "Unlimited  User",
//         isDisabled :false
//       },

//       {
//         itemname: "150GB Storage",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Public Projects",
//         isDisabled : false
//       },
//       {
//         itemname: "Community Access",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Private Projectsr",
//         isDisabled : false
//       },
//       {
//         itemname: "Dedicated Phone Support",
//         isDisabled : false
//       },
//       {
//         itemname: "Unlimited Free Subdomain",
//         isDisabled : false
//       },
//       {
//         itemname: "Monthly Status Reports",
//         isDisabled : false
//       }
      
//     ]
    


//   }
  
// ]
// return (
//   <section class="pricing py-5">
//     <div class="container">
//       <div class="row">
//       {
//         carddetails.map((price)=>{
//           return <Card details={price}></Card>
//         })
//       }
//       </div>
//     </div>
//   </section>

  
// );