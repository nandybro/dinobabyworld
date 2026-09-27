/**
 * Dinobaby World - Main JavaScript
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
// Your WhatsApp Number (include country code, without '+' or spaces)
const WHATSAPP_NUMBER = "919500368149"; // dino_babyworld

// ============================================================================
// PRODUCT LIST
// ============================================================================
// INSTRUCTIONS: 
// 1. Upload your photos to the 'images/' folder.
// 2. Add an entry for each product below.
// 'filename' must match the exact file name you uploaded.
// 'name' is the professional display name shown on the website.
const productImages = [
    {
        images: ["6381B9CF-B8BE-4D5D-91CF-72F7910006CC.jpeg", "B84C3881-90C7-40BD-815F-73937891FE3D.jpeg", "3211113E-F7AC-42F6-93CF-2C1EA50CFA1A.jpeg", "3DED264F-0C7D-4E1E-AD3F-00DA86C5713A.jpeg"],
        name: "100 Words Book",
        price: 1000,
        discountedPrice: 530,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["A225EE98-D47A-4846-BB91-56AE5ADD1EE4.jpeg", "6A775D20-1AA6-4280-B30A-E531553621E8.jpeg", "0DED6DCC-7DD2-4E43-A0EA-9E544E2613C7.jpeg",],
        name: "Classic Baby Chair",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "40695E18-8F54-429D-9C51-CBFAD5FDCA0F.jpeg", "FF3BA7B7-65A4-4BD9-85C6-51416365256D.jpeg"],
        name: "Classic Baby Chair",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    // {
    //     images: ["A225EE98-D47A-4846-BB91-56AE5ADD1EE4.jpeg", "6A775D20-1AA6-4280-B30A-E531553621E8.jpeg", "0DED6DCC-7DD2-4E43-A0EA-9E544E2613C7.jpeg", "40695E18-8F54-429D-9C51-CBFAD5FDCA0F.jpeg", "FF3BA7B7-65A4-4BD9-85C6-51416365256D.jpeg", "EB6EEEF2-9E1F-408D-B460-B3F96DC968F5.jpeg", "5DB69851-454A-495E-93A4-9F16B410FC39.jpeg", "CF4D1272-F610-4FB8-A700-C5B82B68D998.jpeg"],
    //     name: "Classic Baby Chair",
    //     price: 1999,
    //     discountedPrice: 1499,
    //     features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    // },
    {
        images: ["EB6EEEF2-9E1F-408D-B460-B3F96DC968F5.jpeg", "5DB69851-454A-495E-93A4-9F16B410FC39.jpeg", "CF4D1272-F610-4FB8-A700-C5B82B68D998.jpeg"],
        name: "Hot & Cold feeding bottle",
        price: 1180,
        discountedPrice: 580,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["84A24466-A4F9-4707-9CE1-D508D2F349D8.jpeg", "CE3E4753-EB14-4654-9EB7-EF2E14B59182.jpeg", "37A1DCDF-C385-443E-A3C9-256F457CD018.jpeg"],
        name: "SS Feeding Sipper",
        price: 900,
        discountedPrice: 625,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["2A0F7FA3-BD1F-4ADC-809A-DC49CA6A2E2A.jpeg", "B143C57D-21DD-4D4C-9560-2B8922B38941.jpeg", "743F80B9-ADF1-41DF-9ED8-B7B1DF80EB1F.jpeg", "A3ADD614-27A4-40E9-A875-ED3E9223A590.jpeg", "AE2BF81E-54AB-43D0-95A5-5E5A3F06BA5C.jpeg", "3027710C-0E36-472E-8D9F-62B4D70C0BD6.jpeg"],
        name: "Baby Potty seat",
        price: 700,
        discountedPrice: 350,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["0C6D2086-968D-40B5-BA91-692B04F3ACD9.jpeg", "E8221B2F-50A8-4121-ACF3-9B547D73F620.jpeg", "063D4A72-3567-4463-B8BC-1C85240F733B.jpeg", "B4B17079-C400-4842-AF3E-6C31FE8FA5DD.jpeg", "EA2785C0-7DFD-4019-8BFF-21E6058AF615.jpeg"],
        name: "Potty Handle seat",
        price: 679,
        discountedPrice: 339,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "715AC826-7B2E-4105-A974-A2B9F2C4607A.jpeg", "5B9CC9EA-C812-47B9-8454-2E76FC9EC1F5.jpeg", "C7A84258-1CA1-403B-8020-4FC4C4902079.jpeg"],
        name: "Potty Conmfort seat",
        price: 999,
        discountedPrice: 519,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["4BE35DE5-794F-468D-852C-0ED45D8F0B3D.jpeg", "0EC38C4A-F5C5-4D8F-BA47-BB651AA50FE5.jpeg", "05CC5354-F36A-4168-958C-1CC082BFE4B7.jpeg", "9AF59921-6C55-4FAE-B1E8-01DC119519FB.jpeg"],
        name: "Baby comb",
        price: 60,
        discountedPrice: 30,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["D9E02FF9-CF1B-41EF-956B-4F0721745F77.jpeg", "36C43245-2086-44F9-B2E2-992861A321FA.jpeg", "3E051D21-7845-4BE7-82C6-C3E3216E5DA4.jpeg", "D75DC41B-1897-42B8-AB90-142BB2BFB136.jpeg"],
        name: "Beautiful Open Closed Tooth Brush",
        price: 360,
        discountedPrice: 179,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["2D00EC8A-A9DD-4265-8BE2-953EC824A99F.jpeg", "2CE56998-5479-4D43-9CD0-EBCF3C8961AB.jpeg"],
        name: "Cute Toddler Outfit",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["BC2555B5-026C-467F-8235-00C532EAEFDA.jpeg", "D345DA7D-1E50-4BD6-B981-79C0CB27B1F5.jpeg", "9E2A444F-6C5D-4271-BF39-BAC02BD76F9D.jpeg", "98E25178-47D9-4F65-9C01-B7CCA0A2D07C.jpeg"],
        name: "Rechargeable Milk Warmer",
        price: 1960,
        discountedPrice: 979,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["FE7BB4B6-8C14-4DFF-9C90-56D2D0B5216D.jpeg", "838D3912-6B43-45B1-9316-CB1DB49DF034.jpeg", "45238174-E687-4C20-89B4-C010D1E432C0.jpeg", "9A17A622-23EB-4EF9-ACB9-2D3181AE295B.jpeg", "A67BEC12-8ACF-414E-8A84-CC3BE2AF6050.jpeg", "A735DB10-F6AA-4465-94E1-D214EA171F31.jpeg"],
        name: "Food Grade Silicone Teether",
        price: 400,
        discountedPrice: 209,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["032D4B03-16CD-41E7-AAA7-F59A34FE7B76.jpeg", "11DF26C2-6DA1-41AD-AA39-88F11E6162C2.jpeg", "8715D74D-DA46-4258-83BF-9CBD1A4422AD.jpeg"],
        name: "Baby Bath Tub",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["B8418591-2811-42D9-84FD-336F439A3CDB.jpeg", "0CB05080-4B8A-4400-A985-5595897CF673.jpeg", "5ADC4CD8-6D1C-4FA0-8E01-69216526FE96.jpeg", "6A64E3D4-CE0E-4BCF-BB8D-BB5A3231A9EF.jpeg", "DE32C88D-77E4-48B2-AB2F-1AC104351FFA.jpeg", "245BC9A8-8D0A-4E98-A30F-484F56614F04.jpeg", "91A02A11-7FF5-44DC-85C0-01CD851F6678.jpeg", "11923C74-3AF7-4A1B-8377-9C2913CF1B6F.jpeg"],
        name: "Santa Clause Tooth Brush",
        price: 120,
        discountedPrice: 59,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["348EA225-D8A8-434C-A2F7-CB021DCB2331.jpeg", "51C80EBA-225C-466C-878B-A5D889515DE2.jpeg", "EA5C4BBD-C56E-459D-877E-5ED5AE2295A5.jpeg", "9CA8CB57-042A-4BAE-8562-2FC70F603C0B.jpeg"],
        name: "Kids Comb",
        price: 60,
        discountedPrice: 30,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["9F11977A-14B3-40C2-B86A-CA26448FF182.jpeg", "E17A5B00-D18D-4DB6-A750-F83F8B3CBE9D.jpeg", "96AA9088-675D-49AA-A062-0589BEA16D5D.jpeg", "CCBE3517-400C-43BE-9E31-97A3F9780845.jpeg"],
        name: "Plush Toy Set",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["499E417B-CC6F-4B41-826D-3F65B2E9B8F5.jpeg", "3B6A6876-18EE-481C-AE58-AB8446CE8894.jpeg", "A2E0F06A-4F06-43C4-8B12-0C35F0F8986C.jpeg", "65D9C63D-7FE0-4B18-9D6A-3E4ED4624E14.jpeg",],
        name: "Silicone Fruit Shapped Teether Toy",
        price: 340,
        discountedPrice: 165,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "E81A2EAA-AB1E-4E22-B84A-5ECDC96702AD.jpeg", "A3ED3F35-4849-4510-B527-46F2ED718F1C.jpeg", "EF10F21E-6705-4653-8582-0DF42E0EAFD5.jpeg", "98F702CA-BD20-4FB9-9FFD-21B8172801A5.jpeg", "23F9830E-F13F-4B99-983C-AA2A6F898C74.jpeg", "906107AE-F507-4094-AEC9-0618E112DF15.jpeg", "C8790477-5316-4066-9E4D-3C7B8AC7A647.jpeg", "7FEAD985-2697-4864-BF0E-43D8A8AA49A7.jpeg", "5A07023A-1437-407B-B597-ECD204BE1B49.jpeg", "A180AC4E-3CB1-49F5-B37D-CEF342F797E6.jpeg", "58D90534-1FA9-40E3-ADF7-AEDD6FB890C5.jpeg", "35859828-2ACB-457B-A9E9-F2CD6F9A52D9.jpeg", "0FB7A844-4B0C-4E31-8953-28841ABA261A.jpeg", "2D3B23BB-A960-4418-A9E5-E0D534084866.jpeg"],
        name: "Baby Walker",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["E2F00B15-5D8B-40A1-BF49-9C0059BF4FFA.jpeg", "A58BA59B-6B04-4D70-BF9A-50EBAC4EDFFB.jpeg", "100CC44F-FE16-4F3A-9613-70B2EF28E381.jpeg", "622AE172-3F85-4322-978C-8D3245CAE249.jpeg", "1837A6E5-C696-49FD-87FD-DC17D901E4B8.jpeg"],
        name: "U shapped tooth Brush",
        price: 90,
        discountedPrice: 35,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["94291CBE-32F1-495D-B26E-6ECE59FF0220.jpeg", "CEBDC973-C3DF-4C6F-9F07-4E88EA449C86.jpeg", "53FFC6B4-390C-45F9-B403-8642072D6F19.jpeg"],
        name: "Baby Teether with toy",
        price: 500,
        discountedPrice: 225,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["6E6252D7-B37C-4B79-8215-BDE6B20EF846.jpeg", "28917789-E4F1-49A8-B6F4-B339C1104D3D.jpeg", "10A014E3-CBD0-4573-9B68-CC08B9D6A27D.jpeg", "8FABEB91-345F-459A-B98F-F6D629295799.jpeg"],
        name: "Classic U Shapped Teether ",
        price: 130,
        discountedPrice: 55,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "F0659D90-FCC7-4CBC-A478-3278238F3F5E.jpeg", "05285C30-9E99-4695-BC8E-8D38859DE84A.jpeg", "5D69B968-4FD5-413F-AD80-1B0A5A6921AA.jpeg", "B83E76E6-7FAD-4EB0-BA16-7CFA159B2EAE.jpeg"],
        name: "4 pieces Baby care kit",
        price: 350,
        discountedPrice: 160,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "28C53DAD-746D-4324-B517-185848335B15.jpeg", "71B0D6F5-68E9-4698-BB25-C9F2E0213495.jpeg", "70C0CC95-F92D-4E60-9C81-665FC4F7FC7C.jpeg", "74B7949D-013C-45C0-A1C3-06D514BCAA6C.jpeg", "9E8FE752-D98D-4596-82BC-3B81E266C539.jpeg", "9A85B3ED-A781-4D30-A051-42C0EA744815.jpeg", "B4918812-29D2-4F89-9A00-61DD15BC1675.jpeg", "C57649C5-679B-46F0-A025-035A73046795.jpeg"],
        name: "Classic Baby Brush",
        price: 200,
        discountedPrice: 100,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "45B7594C-8714-4F9B-9C58-B645D5785D1C.jpeg", "F1B2D72B-E2F5-42D3-8E2C-326733956B17.jpeg"],
        name: "Nursery Organizer",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["AB6AE3A3-60F1-40A4-BAFC-6A1D21FD5D51.jpeg", "D8D6ADE0-AF09-4B22-BC84-E7BDB385C4F3.jpeg", "C660672D-1F0C-46A2-8C65-931C9B419CAA.jpeg", "0DB8AD3C-3FA8-4C7F-B7A5-5C1231099238.jpeg", "4A48A0BD-27D2-4132-B1A1-03D0EFF4EE3B.jpeg", "799EBD58-1FA0-4C40-B188-BA70AD06F6E9.jpeg", "883F92DB-E75C-47B2-876E-C8BD5943037F.jpeg"],
        name: "Cartoon soft tooth brush",
        price: 340,
        discountedPrice: 180,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["3DB768E2-33D4-4D33-97BF-0C967BFB953D.jpeg", "70F9300E-0242-45B4-B0E0-364B61E3C599.jpeg", "D3879220-A24B-4DBE-AA09-D61936FC5E43.jpeg", "DE1AC366-0FD9-4070-8ED9-B7D4109E395F.jpeg"],
        name: "Tooth Brush Soft Bristle",
        price: 300,
        discountedPrice: 160,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["1E03428A-854E-47EE-980F-C4944DB15016.jpeg", "C68A7BD5-40F4-4F46-81DD-EFC883C27551.jpeg"],
        name: "Soothing Pacifier Set",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["5B39EFB4-6D8E-4F07-9E47-A3507C9F1C5D.jpeg", "7431A1B9-45EC-4F30-9C53-21B4DD41D424.jpeg", "42B85146-1E31-4DA5-BAFF-0D37BC34030B.jpeg", "F85D9F80-F530-48E4-AD27-05A3149612D5.jpeg"],
        name: "Electric Baby Manicure Set",
        price: 700,
        discountedPrice: 340,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["7786614E-3785-403F-B4CD-7085AE214AD4.jpeg", "3DC46801-B289-437F-BF82-FBFCDF7A804D.jpeg", "FB5626A4-1277-4AE1-9462-2330FF228062.jpeg"],
        name: "Baby Three Side Soft Tooth Brush ",
        price: 340,
        discountedPrice: 170,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["85B01174-CF4A-448F-8EC0-00BBA67B9D1C.jpeg", "8F9C25A3-0691-4CB3-B18F-068295A0633F.jpeg", "B287DA75-8411-4635-AF7B-D62CF470ED54.jpeg", "00A8812F-DA0F-42F1-957F-2C8514B3875A.jpeg", "23A288BD-450F-4BB3-B074-09D8F60157B2.jpeg"],
        name: "Baby food feeder",
        price: 300,
        discountedPrice: 185,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["5EEF298C-11C9-4ECE-AAD9-21E518EA6D5C.jpeg", "A7950026-2324-4D3D-8371-B5DF7DDCF16A.jpeg"],
        name: "Food Grade Silicone food feeder",
        price: 350,
        discountedPrice: 165,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["74524E7E-0EB3-49FF-A209-E5DE5BC2D844.jpeg", "D6C5749C-7F23-415F-B823-BAFFA89BDBD6.jpeg", "248D553D-ECC8-4D8F-BB72-869E53AAF6AA.jpeg", "D4E587BE-49F9-4B13-8DBE-DB36F2D05760.jpeg"],
        name: "Baby Food Feeder",
        price: 299,
        discountedPrice: 145,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "538FF39E-1A83-42F4-9365-A5A138D5BB96.jpeg", "DC3B4F88-D46A-4EF2-A767-15BD64FEDE2A.jpeg", "18CD8703-6B00-4650-9557-166781B12F6D.jpeg", "0DFE8B7B-37C7-430C-9171-522763920D95.jpeg", "381D0F81-F3B7-4D68-83D6-6610F5619D82.jpeg", "73286F9A-9145-4E4B-ACB4-FC4CC5CA90F4.jpeg"],
        name: "Pregnancy Pillow",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["99982E37-1950-4A7E-95F3-EB6794AFE2A1.jpeg", "35A5F2D3-9FB8-431C-95FD-906024D37CD8.jpeg", "CE40835D-1E06-41CA-ACA6-9D213CDE2091.jpeg", "FF108397-E4CF-4508-A00F-7AFD588B97E2.jpeg", "AFBA9F67-453A-451F-B9EE-686BCFFCBB4B.jpeg", "08F72792-47C3-42EA-9545-2F136225D129.jpeg", "30D9CB15-D4E2-4122-8B54-F403FEBBB886.jpeg", "C7A55FF7-0B38-4782-B99C-A5B762A22DB8.jpeg", "5FE439EF-808C-440E-862E-642C7ADCB7B1.jpeg"],
        name: "Baby Bath Tub",
        price: 1999,
        discountedPrice: 1499,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "B0880134-1DB8-4A36-8499-18172BF86DE3.jpeg", "12252FC9-F4DC-4FB5-8588-31755D12BA0A.jpeg", "9DC48709-2FF6-49C2-9F33-EFBABD66B7EB.jpeg", "D911DA47-BAE3-4FFA-8661-47BA308FF69C.jpeg"],
        name: "Baby Comb & Brush Set",
        price: 400,
        discountedPrice: 195,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "124C5D6A-10F7-435B-A482-4535488B7B9D.jpeg", "AE3D9094-80F0-436F-81AF-FFFB38E7B648.jpeg", "6698C02E-E595-44E6-9BED-C2825CAC38A4.jpeg"],
        name: "Medicine Feeder",
        price: 110,
        discountedPrice: 69,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "D28C3DF3-68F8-49C7-81E4-19C6C534F9FF.jpeg", "0026DA6F-E97F-4B5D-BCBE-8FE9A459CECD.jpeg", "6340E693-8EF8-4C74-BB05-6F4273804F52.jpeg", "34D2DED6-0719-429B-8894-0FECDDEAA37B.jpeg"],
        name: "Medicine Dropper",
        price: 200,
        discountedPrice: 99,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["B1C63918-02BF-40F8-8480-F89B834569E7.jpeg", "A5AF68D9-E4CE-4456-A509-DD093BA25E3A.jpeg", "1C2B8B26-D133-45A2-9238-D72EB85B6890.jpeg", "0DBE75AF-6958-4C85-99BA-6CBD8155482C.jpeg", "FBFDB99C-EA59-425A-9BE0-95B10DD65526.jpeg", "49026231-8058-4DAD-96F2-FDA749C9C5D4.jpeg",],
        name: "Advance Baby Nose Cleaner",
        price: 400,
        discountedPrice: 235,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "1A89C943-C3F4-428B-9317-F911F188B8CF.jpeg", "18B4F556-47C1-42B0-BAB4-D7155D25531B.jpeg", "4315EB45-A052-4BBC-AA47-EB7AF5418BCA.jpeg",],
        name: "Hand Gloves Silicone Teether",
        price: 499,
        discountedPrice: 250,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "D1BCB74B-2123-43E4-87B9-1BEEF866FFC4.jpeg", "2E0709E6-E38A-4DFA-9377-4358B6F088BE.jpeg", "C25156A8-B525-4EEA-897F-C0A22F3DF4E1.jpeg", "FD3A7C5C-A6AC-4C89-9080-6578D136A7F0.jpeg", "243A1194-7577-4034-BA08-DFAF9E539260.jpeg"],
        name: "Hand Gloves Silicone Teether",
        price: 300,
        discountedPrice: 160,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "0ADEB0D2-5542-4639-B12A-68CBDF263772.jpeg", "60C7E0BB-2E8F-4BF9-9D31-A345904C2448.jpeg", "AD34FBC6-318B-466C-AB5B-8D5A1843D19A.jpeg", "88E7CF56-59B5-4A40-ABAF-F3463066E8A5.jpeg"],
        name: "Baby Nail Trimmer",
        price: 540,
        discountedPrice: 280,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: ["A7CDAD02-EA78-4C11-9435-174B59746ECA.jpeg", "27352CF0-9CBC-48C2-9B68-071F837F99B0.jpeg"],
        name: "Baby Water proof PlayMat",
        price: 1200,
        discountedPrice: 600,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "9F918437-1A1E-4F4E-A916-70D897D2C1DD.jpeg", "104F4490-C107-4398-97B5-FD20B4B082D0.jpeg"],
        name: "Premium Water proof PlayMat",
        price: 1799,
        discountedPrice: 850,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "DDD3C5B1-EFD6-45D5-916B-01B3E191D090.jpeg", "3134BB60-B7C1-47DD-A6F5-B138E8A3B714.jpeg", "68046006-AE19-42A4-B121-48DA6A5167E9.jpeg"],
        name: "Double side Water proof PlayMat",
        price: 1999,
        discountedPrice: 980,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
    {
        images: [
            "C0B0D72A-0F8B-41D8-B476-28D98BE25E3E.jpeg", "6D2940B0-C607-4B41-B25E-2E443EB7D0BE.jpeg", "FB410634-EA87-4358-B257-D06E32656F1D.jpeg", "9EC048F3-1EEB-4DAD-9989-C12DD6CA6828.jpeg", "1864A23A-BDE8-4C52-A17F-E95A3CD5541F.jpeg", "6190A6D7-E9F5-47ED-BEDA-917F49E6145A.jpeg", "69D3A6C6-13DE-40BC-AADD-603F709243E4.jpeg"],
        name: "2 in 1 Round Potty Chair",
        price: 1500,
        discountedPrice: 820,
        features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
    },
];

// ============================================================================
// APP LOGIC
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const noProductsMessage = document.getElementById('no-products-message');

    // Check if we have any products listed
    if (productImages.length === 0) {
        noProductsMessage.classList.remove('d-none');
        return;
    }

    // Render each product
    productImages.forEach((product, index) => {
        const displayName = product.name;
        const imageFilename = product.images && product.images.length > 0 ? product.images[0] : product.filename;

        const priceOriginal = product.price ? '₹' + product.price : '';
        const priceDiscounted = product.discountedPrice ? '₹' + product.discountedPrice : '';

        // 1. Create the WhatsApp URL with pre-filled message
        let message = `Hi, I am interested in the ${displayName}. Could you please provide more details?`;
        let encodedMessage = encodeURIComponent(message);
        let whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // 2. Create the Bootstrap Card HTML
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 col-md-4 col-lg-3';

        colDiv.innerHTML = `
            <div class="product-card h-100">
                <div class="product-image-container" onclick="openProductModal(${index})" style="cursor: pointer;" title="Click to view details">
                    <img src="images/${imageFilename}" alt="${displayName}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x250?text=Image+Not+Found'">
                    <div class="quick-view-overlay">
                        <span><i class="fa-solid fa-magnifying-glass me-1"></i> Quick View</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title text-center">${displayName}</h3>
                    <div class="price-container mb-3 text-center">
                        ${priceOriginal ? `<span class="price-original text-muted text-decoration-line-through me-2">${priceOriginal}</span>` : ''}
                        ${priceDiscounted ? `<span class="price-discounted text-success fw-bold fs-5">${priceDiscounted}</span>` : ''}
                    </div>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp mt-auto w-100">
                        <i class="fa-brands fa-whatsapp fs-5"></i> Order Now
                    </a>
                </div>
            </div>
        `;

        productsContainer.appendChild(colDiv);
    });
});

// Modal Logic
let productModalInstance = null;
window.openProductModal = function (index) {
    const product = productImages[index];
    const modalBody = document.getElementById('productModalBody');

    if (!productModalInstance) {
        productModalInstance = new bootstrap.Modal(document.getElementById('productModal'));
    }

    // Generate carousel HTML if multiple images, else just img
    let imagesHtml = '';
    const imgs = product.images || [product.filename]; // fallback
    if (imgs.length > 1) {
        let indicators = '';
        let items = '';
        imgs.forEach((img, i) => {
            indicators += `<button type="button" data-bs-target="#productCarousel" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Slide ${i + 1}"></button>`;
            items += `
                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <img src="images/${img}" class="d-block w-100 rounded" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400?text=Image+Not+Found'">
                </div>
            `;
        });
        imagesHtml = `
            <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">${indicators}</div>
                <div class="carousel-inner rounded shadow-sm">${items}</div>
                <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
    } else {
        imagesHtml = `<img src="images/${imgs[0]}" class="img-fluid rounded shadow-sm w-100" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400?text=Image+Not+Found'">`;
    }

    const priceOriginal = product.price ? '₹' + product.price : '';
    const priceDiscounted = product.discountedPrice ? '₹' + product.discountedPrice : '';

    let featuresHtml = '';
    if (product.features && product.features.length > 0) {
        featuresHtml = '<ul class="product-features-list mt-3 list-unstyled">';
        product.features.forEach(f => {
            featuresHtml += `<li class="mb-2"><i class="fa-solid fa-check text-success me-2"></i> ${f}</li>`;
        });
        featuresHtml += '</ul>';
    }

    let message = `Hi, I am interested in the ${product.name}. Could you please provide more details?`;
    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    modalBody.innerHTML = `
        <div class="row g-4 align-items-center">
            <div class="col-md-6">
                ${imagesHtml}
            </div>
            <div class="col-md-6 d-flex flex-column h-100 justify-content-center">
                <h2 class="modal-product-title fw-bold mb-3" style="color: var(--text-dark); font-family: var(--font-display);">${product.name}</h2>
                <div class="price-container mb-3">
                    ${priceOriginal ? `<span class="price-original text-muted text-decoration-line-through me-2 fs-5">${priceOriginal}</span>` : ''}
                    ${priceDiscounted ? `<span class="price-discounted fw-bold fs-3" style="color: var(--mint) !important;">${priceDiscounted}</span>` : ''}
                </div>
                
                <div class="product-features flex-grow-1 text-secondary">
                    <h5 class="fw-bold mb-2" style="color: var(--text-dark);">Key Features:</h5>
                    ${featuresHtml}
                </div>
                
                <div class="mt-4 pt-2 border-top">
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-100 py-3 fs-5 shadow-sm">
                        <i class="fa-brands fa-whatsapp fs-4"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;

    productModalInstance.show();
}
