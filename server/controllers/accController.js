// const AccModel = require('../models/accModel')
// // const UsrModel = require('../models/usrModel')
// const CntstModel = require('../models/cntstModel')
// const TcktModel = require('../models/tcktModel')

module.exports = {
    // create: async (req, res) => {
    //     const {acc_unique_code, acc_name, acc_phone, acc_email, acc_type, acc_cat, acc_subcat, acc_status, added_by, booked_tckt} = req.body
    //     // console.log(req.body)

    //     try {
    //         const Accexst = await AccModel.findOne({$or: [{acc_unique_code},{acc_phone}]})
    //         if (Accexst) {
    //             res.json({error:`Account already Exist...!`, statuscode:422})
    //         }
    //         else {
    //             const Acc = await AccModel.create({acc_unique_code, acc_name, acc_phone, acc_email, acc_type, acc_cat, acc_subcat, acc_status, added_by, booked_tckt})
    //             if (Acc) {
    //                 res.json({success:`Account created Successfully.`, statuscode:220, data:Acc})
    //             }
    //             else {
    //                 res.json({error:`Account creation Failed...!`, statuscode:423})
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
    // upload: async (req, res) => {
    //     // console.log(req.body)
    //     const {exclDatai, added_by} = req.body
    //     try {
    //         // console.log(exclDatai.length)
    //         if (exclDatai.length > 0) {
    //             const Acc = await AccModel.insertMany(exclDatai)
    //             Acc.forEach(async (elm) => {
    //                 await AccModel.findOneAndUpdate({_id: elm._id}, {added_by, booked_tckt:0})
    //             })
    //             if (Acc) {
    //                 res.json({success:`Account created Successfully.`, statuscode:220, data:Acc})
    //             }
    //             else {
    //                 res.json({error:`Account creation Failed...!`, statuscode:423})
    //             }
    //         }
    //         // console.log(Acc)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
    // uploadbooktckt: async (req, res) => {
    //     // console.log(req.body)
    //     const {accdta, booktck} = req.body
    //     let accexstdtl = [], addsuccss = 0, updtsuccss = 0, failr = 0, Bookacc = [], Tcktbook = []

    //     try {
    //         if (accdta.length > 0) {
    //             for (let i=0; i<accdta.length; i++) {
    //                 const Accexst = await AccModel.findOne({acc_unique_code:accdta[i].acc_unique_code})
    //                 if (Accexst) {
    //                     accexstdtl.push({acc_id:Accexst._id, acc_stat: 1})
    //                 }
    //                 else {
    //                     accexstdtl.push({acc_id:'', acc_stat: 0})
    //                 }
    //             }
    //             // console.log(accdta)
    //             // console.log(accexstdtl)
    //             if (accexstdtl) {
    //                 for (let i=0; i<accexstdtl.length; i++) {
    //                     if (accexstdtl[i].acc_stat === 0) {
    //                         // console.log(accdta[i])
    //                         const Acc = await AccModel.create(accdta[i])
    //                         if (Acc) {
    //                             // console.log(Acc)
    //                             const Accdta = await AccModel.findOneAndUpdate({_id: Acc._id}, {booked_tckt:booktck[i].booked_tckt}, {new:true})
    //                             if (Accdta) {
    //                                 addsuccss += 1
    //                                 Bookacc.push({booked_acc:Acc._id})
    //                                 Tcktbook.push({booked_acc:Acc._id, booked_cntst:booktck[i].booked_cntst, booked_tckt:booktck[i].booked_tckt})
    //                             }
    //                         }
    //                         else {
    //                             failr += 1
    //                         }
    //                     }
    //                     else if (accexstdtl[i].acc_stat === 1) {
    //                         // console.log(accdta[i])
    //                         const Acc = await AccModel.findOneAndUpdate({acc_unique_code:accdta[i]&&accdta[i].acc_unique_code}, {acc_name:accdta[i]&&accdta[i].acc_name, acc_phone:accdta[i]&&accdta[i].acc_phone, acc_email:accdta[i]&&accdta[i].acc_email, acc_status:accdta[i]&&accdta[i].acc_status}, {new:true})
    //                         if (Acc) {
    //                             // console.log(Acc)
    //                             const Accdta = await AccModel.findOneAndUpdate({_id: Acc._id}, {booked_tckt:booktck[i].booked_tckt}, {new:true})
    //                             if (Accdta) {
    //                                 updtsuccss += 1
    //                                 Bookacc.push({booked_acc:Acc._id})
    //                                 Tcktbook.push({booked_acc:Acc._id, booked_cntst:booktck[i].booked_cntst, booked_tckt:booktck[i].booked_tckt})
    //                             }
    //                         }
    //                         else {
    //                             failr += 1
    //                         }
    //                     }
    //                     else {
    //                         failr += 1
    //                     }
    //                 }
    //             }
    //             // console.log(Tcktbook)
    //             if ((addsuccss > 0) || (updtsuccss > 0)) {
    //                 Tcktbook.forEach(async (elm, i) => {
    //                     const {booked_acc, booked_cntst, booked_tckt} = elm
    //                     if (booked_tckt > 0) {
    //                         const Updtntst = await CntstModel.updateOne({_id:booked_cntst}, {$inc:{tckt_count:booked_tckt}}, {new:true})
    //                         if (Updtntst) {
    //                             for (let j=0;j<booked_tckt;j++) {
    //                                 const Tcktbk = await TcktModel.create({booked_acc, booked_cntst, tckt_status:'Booked'})
    //                             }
    //                         }
    //                     }
    //                 })
    //             }
    //             res.json({message:`${addsuccss} Bulk Add & Booked; And, ${updtsuccss} Bulk Edit & Booked; And ${failr} Failed ...!`, statuscode:220})
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
    // read: async (req, res) => {
    //     try {
    //         const Acc = await AccModel.find().populate('added_by')
    //         res.json({message:`All Account details fetched`, statuscode:200, data:Acc})
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
    create: async (req, res) => {},
    upload: async (req, res) => {},
    read: async (req, res) => {},
    update: async (req, res) => {},
    delete: async (req, res) => {}
}