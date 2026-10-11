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
    images: [
      "6381B9CF-B8BE-4D5D-91CF-72F7910006CC.jpeg",
      "B84C3881-90C7-40BD-815F-73937891FE3D.jpeg",
      "3211113E-F7AC-42F6-93CF-2C1EA50CFA1A.jpeg",
      "3DED264F-0C7D-4E1E-AD3F-00DA86C5713A.jpeg",
    ],
    name: "100 Words Book",
    price: 1000,
    discountedPrice: 530,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "A225EE98-D47A-4846-BB91-56AE5ADD1EE4.jpeg",
      "6A775D20-1AA6-4280-B30A-E531553621E8.jpeg",
      "0DED6DCC-7DD2-4E43-A0EA-9E544E2613C7.jpeg",
    ],
    name: "Hand Gloves with Rib",
    price: 80,
    discountedPrice: 60,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "40695E18-8F54-429D-9C51-CBFAD5FDCA0F.jpeg",
      "FF3BA7B7-65A4-4BD9-85C6-51416365256D.jpeg",
    ],
    name: "Baby Hand Gloves",
    price: 60,
    discountedPrice: 30,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  // {
  //     images: ["A225EE98-D47A-4846-BB91-56AE5ADD1EE4.jpeg", "6A775D20-1AA6-4280-B30A-E531553621E8.jpeg", "0DED6DCC-7DD2-4E43-A0EA-9E544E2613C7.jpeg", "40695E18-8F54-429D-9C51-CBFAD5FDCA0F.jpeg", "FF3BA7B7-65A4-4BD9-85C6-51416365256D.jpeg", "EB6EEEF2-9E1F-408D-B460-B3F96DC968F5.jpeg", "5DB69851-454A-495E-93A4-9F16B410FC39.jpeg", "CF4D1272-F610-4FB8-A700-C5B82B68D998.jpeg"],
  //     name: "Classic Baby Chair",
  //     price: 1999,
  //     discountedPrice: 1499,
  //     features: ["Premium Quality", "Safe for Babies", "Beautiful Design"]
  // },
  {
    images: [
      "EB6EEEF2-9E1F-408D-B460-B3F96DC968F5.jpeg",
      "5DB69851-454A-495E-93A4-9F16B410FC39.jpeg",
      "CF4D1272-F610-4FB8-A700-C5B82B68D998.jpeg",
    ],
    name: "Hot & Cold feeding bottle",
    price: 1180,
    discountedPrice: 580,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "84A24466-A4F9-4707-9CE1-D508D2F349D8.jpeg",
      "CE3E4753-EB14-4654-9EB7-EF2E14B59182.jpeg",
      "37A1DCDF-C385-443E-A3C9-256F457CD018.jpeg",
    ],
    name: "SS Feeding Sipper",
    price: 900,
    discountedPrice: 625,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "2A0F7FA3-BD1F-4ADC-809A-DC49CA6A2E2A.jpeg",
      "B143C57D-21DD-4D4C-9560-2B8922B38941.jpeg",
      "743F80B9-ADF1-41DF-9ED8-B7B1DF80EB1F.jpeg",
      "A3ADD614-27A4-40E9-A875-ED3E9223A590.jpeg",
      "AE2BF81E-54AB-43D0-95A5-5E5A3F06BA5C.jpeg",
      "3027710C-0E36-472E-8D9F-62B4D70C0BD6.jpeg",
    ],
    name: "Baby Potty seat",
    price: 700,
    discountedPrice: 350,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "0C6D2086-968D-40B5-BA91-692B04F3ACD9.jpeg",
      "E8221B2F-50A8-4121-ACF3-9B547D73F620.jpeg",
      "063D4A72-3567-4463-B8BC-1C85240F733B.jpeg",
      "B4B17079-C400-4842-AF3E-6C31FE8FA5DD.jpeg",
      "EA2785C0-7DFD-4019-8BFF-21E6058AF615.jpeg",
    ],
    name: "Potty Handle seat",
    price: 679,
    discountedPrice: 339,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "715AC826-7B2E-4105-A974-A2B9F2C4607A.jpeg",
      "5B9CC9EA-C812-47B9-8454-2E76FC9EC1F5.jpeg",
      "C7A84258-1CA1-403B-8020-4FC4C4902079.jpeg",
    ],
    name: "Potty Conmfort seat",
    price: 999,
    discountedPrice: 519,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "4BE35DE5-794F-468D-852C-0ED45D8F0B3D.jpeg",
      "0EC38C4A-F5C5-4D8F-BA47-BB651AA50FE5.jpeg",
      "05CC5354-F36A-4168-958C-1CC082BFE4B7.jpeg",
      "9AF59921-6C55-4FAE-B1E8-01DC119519FB.jpeg",
    ],
    name: "Baby comb",
    price: 60,
    discountedPrice: 30,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "D9E02FF9-CF1B-41EF-956B-4F0721745F77.jpeg",
      "36C43245-2086-44F9-B2E2-992861A321FA.jpeg",
      "3E051D21-7845-4BE7-82C6-C3E3216E5DA4.jpeg",
      "D75DC41B-1897-42B8-AB90-142BB2BFB136.jpeg",
    ],
    name: "Beautiful Open Closed Tooth Brush",
    price: 360,
    discountedPrice: 179,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "2D00EC8A-A9DD-4265-8BE2-953EC824A99F.jpeg",
      "2CE56998-5479-4D43-9CD0-EBCF3C8961AB.jpeg",
    ],
    name: "Soft Rattle",
    price: 200,
    discountedPrice: 100,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "9E2A444F-6C5D-4271-BF39-BAC02BD76F9D.jpeg",
      "BC2555B5-026C-467F-8235-00C532EAEFDA.jpeg",
      "D345DA7D-1E50-4BD6-B981-79C0CB27B1F5.jpeg",
      "98E25178-47D9-4F65-9C01-B7CCA0A2D07C.jpeg",
    ],
    name: "Rechargeable Milk Warmer",
    price: 1960,
    discountedPrice: 979,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "FE7BB4B6-8C14-4DFF-9C90-56D2D0B5216D.jpeg",
      "838D3912-6B43-45B1-9316-CB1DB49DF034.jpeg",
      "45238174-E687-4C20-89B4-C010D1E432C0.jpeg",
      "9A17A622-23EB-4EF9-ACB9-2D3181AE295B.jpeg",
      "A67BEC12-8ACF-414E-8A84-CC3BE2AF6050.jpeg",
      "A735DB10-F6AA-4465-94E1-D214EA171F31.jpeg",
    ],
    name: "Food Grade Silicone Teether",
    price: 400,
    discountedPrice: 209,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "032D4B03-16CD-41E7-AAA7-F59A34FE7B76.jpeg",
      "11DF26C2-6DA1-41AD-AA39-88F11E6162C2.jpeg",
      "8715D74D-DA46-4258-83BF-9CBD1A4422AD.jpeg",
    ],
    name: "Hold Musical Toy",
    price: 1999,
    discountedPrice: 1499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "B8418591-2811-42D9-84FD-336F439A3CDB.jpeg",
      "0CB05080-4B8A-4400-A985-5595897CF673.jpeg",
      "5ADC4CD8-6D1C-4FA0-8E01-69216526FE96.jpeg",
      "6A64E3D4-CE0E-4BCF-BB8D-BB5A3231A9EF.jpeg",
      "DE32C88D-77E4-48B2-AB2F-1AC104351FFA.jpeg",
      "245BC9A8-8D0A-4E98-A30F-484F56614F04.jpeg",
      "91A02A11-7FF5-44DC-85C0-01CD851F6678.jpeg",
      "11923C74-3AF7-4A1B-8377-9C2913CF1B6F.jpeg",
    ],
    name: "Santa Clause Tooth Brush",
    price: 120,
    discountedPrice: 59,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "348EA225-D8A8-434C-A2F7-CB021DCB2331.jpeg",
      "51C80EBA-225C-466C-878B-A5D889515DE2.jpeg",
      "EA5C4BBD-C56E-459D-877E-5ED5AE2295A5.jpeg",
      "9CA8CB57-042A-4BAE-8562-2FC70F603C0B.jpeg",
    ],
    name: "Kids Comb",
    price: 60,
    discountedPrice: 30,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "9F11977A-14B3-40C2-B86A-CA26448FF182.jpeg",
      "E17A5B00-D18D-4DB6-A750-F83F8B3CBE9D.jpeg",
      "96AA9088-675D-49AA-A062-0589BEA16D5D.jpeg",
      "CCBE3517-400C-43BE-9E31-97A3F9780845.jpeg",
    ],
    name: "Plush Toy Set",
    price: 600,
    discountedPrice: 349,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "499E417B-CC6F-4B41-826D-3F65B2E9B8F5.jpeg",
      "3B6A6876-18EE-481C-AE58-AB8446CE8894.jpeg",
      "A2E0F06A-4F06-43C4-8B12-0C35F0F8986C.jpeg",
      "65D9C63D-7FE0-4B18-9D6A-3E4ED4624E14.jpeg",
    ],
    name: "Silicone Fruit Shapped Teether Toy",
    price: 340,
    discountedPrice: 165,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "E81A2EAA-AB1E-4E22-B84A-5ECDC96702AD.jpeg",
      "A3ED3F35-4849-4510-B527-46F2ED718F1C.jpeg",
      "EF10F21E-6705-4653-8582-0DF42E0EAFD5.jpeg",
      "98F702CA-BD20-4FB9-9FFD-21B8172801A5.jpeg",
      "23F9830E-F13F-4B99-983C-AA2A6F898C74.jpeg",
      "906107AE-F507-4094-AEC9-0618E112DF15.jpeg",
      "C8790477-5316-4066-9E4D-3C7B8AC7A647.jpeg",
      "7FEAD985-2697-4864-BF0E-43D8A8AA49A7.jpeg",
      "5A07023A-1437-407B-B597-ECD204BE1B49.jpeg",
      "A180AC4E-3CB1-49F5-B37D-CEF342F797E6.jpeg",
      "58D90534-1FA9-40E3-ADF7-AEDD6FB890C5.jpeg",
      "35859828-2ACB-457B-A9E9-F2CD6F9A52D9.jpeg",
      "0FB7A844-4B0C-4E31-8953-28841ABA261A.jpeg",
      "2D3B23BB-A960-4418-A9E5-E0D534084866.jpeg",
    ],
    name: "Baby Teether",
    price: 110,
    discountedPrice: 80,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "E2F00B15-5D8B-40A1-BF49-9C0059BF4FFA.jpeg",
      "A58BA59B-6B04-4D70-BF9A-50EBAC4EDFFB.jpeg",
      "100CC44F-FE16-4F3A-9613-70B2EF28E381.jpeg",
      "622AE172-3F85-4322-978C-8D3245CAE249.jpeg",
      "1837A6E5-C696-49FD-87FD-DC17D901E4B8.jpeg",
    ],
    name: "U shapped tooth Brush",
    price: 90,
    discountedPrice: 35,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "94291CBE-32F1-495D-B26E-6ECE59FF0220.jpeg",
      "CEBDC973-C3DF-4C6F-9F07-4E88EA449C86.jpeg",
      "53FFC6B4-390C-45F9-B403-8642072D6F19.jpeg",
    ],
    name: "Baby Teether with toy",
    price: 500,
    discountedPrice: 225,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "6E6252D7-B37C-4B79-8215-BDE6B20EF846.jpeg",
      "28917789-E4F1-49A8-B6F4-B339C1104D3D.jpeg",
      "10A014E3-CBD0-4573-9B68-CC08B9D6A27D.jpeg",
      "8FABEB91-345F-459A-B98F-F6D629295799.jpeg",
    ],
    name: "Classic U Shapped Teether ",
    price: 130,
    discountedPrice: 55,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "F0659D90-FCC7-4CBC-A478-3278238F3F5E.jpeg",
      "05285C30-9E99-4695-BC8E-8D38859DE84A.jpeg",
      "5D69B968-4FD5-413F-AD80-1B0A5A6921AA.jpeg",
      "B83E76E6-7FAD-4EB0-BA16-7CFA159B2EAE.jpeg",
    ],
    name: "4 pieces Baby care kit",
    price: 350,
    discountedPrice: 160,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "28C53DAD-746D-4324-B517-185848335B15.jpeg",
      "71B0D6F5-68E9-4698-BB25-C9F2E0213495.jpeg",
      "70C0CC95-F92D-4E60-9C81-665FC4F7FC7C.jpeg",
      "74B7949D-013C-45C0-A1C3-06D514BCAA6C.jpeg",
      "9E8FE752-D98D-4596-82BC-3B81E266C539.jpeg",
      "9A85B3ED-A781-4D30-A051-42C0EA744815.jpeg",
      "B4918812-29D2-4F89-9A00-61DD15BC1675.jpeg",
      "C57649C5-679B-46F0-A025-035A73046795.jpeg",
    ],
    name: "Classic Baby Brush",
    price: 200,
    discountedPrice: 100,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "45B7594C-8714-4F9B-9C58-B645D5785D1C.jpeg",
      "F1B2D72B-E2F5-42D3-8E2C-326733956B17.jpeg",
    ],
    name: "Nursery Organizer",
    price: 1999,
    discountedPrice: 1499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "AB6AE3A3-60F1-40A4-BAFC-6A1D21FD5D51.jpeg",
      "D8D6ADE0-AF09-4B22-BC84-E7BDB385C4F3.jpeg",
      "C660672D-1F0C-46A2-8C65-931C9B419CAA.jpeg",
      "0DB8AD3C-3FA8-4C7F-B7A5-5C1231099238.jpeg",
      "4A48A0BD-27D2-4132-B1A1-03D0EFF4EE3B.jpeg",
      "799EBD58-1FA0-4C40-B188-BA70AD06F6E9.jpeg",
      "883F92DB-E75C-47B2-876E-C8BD5943037F.jpeg",
    ],
    name: "Cartoon soft tooth brush",
    price: 340,
    discountedPrice: 180,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "3DB768E2-33D4-4D33-97BF-0C967BFB953D.jpeg",
      "70F9300E-0242-45B4-B0E0-364B61E3C599.jpeg",
      "D3879220-A24B-4DBE-AA09-D61936FC5E43.jpeg",
      "DE1AC366-0FD9-4070-8ED9-B7D4109E395F.jpeg",
    ],
    name: "Tooth Brush Soft Bristle",
    price: 300,
    discountedPrice: 160,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "1E03428A-854E-47EE-980F-C4944DB15016.jpeg",
      "C68A7BD5-40F4-4F46-81DD-EFC883C27551.jpeg",
    ],
    name: "SS Medicine Feeder",
    price: 80,
    discountedPrice: 40,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "5B39EFB4-6D8E-4F07-9E47-A3507C9F1C5D.jpeg",
      "7431A1B9-45EC-4F30-9C53-21B4DD41D424.jpeg",
      "42B85146-1E31-4DA5-BAFF-0D37BC34030B.jpeg",
      "F85D9F80-F530-48E4-AD27-05A3149612D5.jpeg",
    ],
    name: "Electric Baby Manicure Set",
    price: 700,
    discountedPrice: 340,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "7786614E-3785-403F-B4CD-7085AE214AD4.jpeg",
      "3DC46801-B289-437F-BF82-FBFCDF7A804D.jpeg",
      "FB5626A4-1277-4AE1-9462-2330FF228062.jpeg",
    ],
    name: "Baby Three Side Soft Tooth Brush ",
    price: 340,
    discountedPrice: 170,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "85B01174-CF4A-448F-8EC0-00BBA67B9D1C.jpeg",
      "8F9C25A3-0691-4CB3-B18F-068295A0633F.jpeg",
      "B287DA75-8411-4635-AF7B-D62CF470ED54.jpeg",
      "00A8812F-DA0F-42F1-957F-2C8514B3875A.jpeg",
      "23A288BD-450F-4BB3-B074-09D8F60157B2.jpeg",
    ],
    name: "Baby food feeder",
    price: 350,
    discountedPrice: 280,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "74524E7E-0EB3-49FF-A209-E5DE5BC2D844.jpeg",
      "D6C5749C-7F23-415F-B823-BAFFA89BDBD6.jpeg",
      "248D553D-ECC8-4D8F-BB72-869E53AAF6AA.jpeg",
      "D4E587BE-49F9-4B13-8DBE-DB36F2D05760.jpeg",
      "5EEF298C-11C9-4ECE-AAD9-21E518EA6D5C.jpeg",
      "A7950026-2324-4D3D-8371-B5DF7DDCF16A.jpeg",
    ],
    name: "Baby Food Feeder",
    price: 350,
    discountedPrice: 250,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "538FF39E-1A83-42F4-9365-A5A138D5BB96.jpeg",
      "DC3B4F88-D46A-4EF2-A767-15BD64FEDE2A.jpeg",
      "18CD8703-6B00-4650-9557-166781B12F6D.jpeg",
      "0DFE8B7B-37C7-430C-9171-522763920D95.jpeg",
      "381D0F81-F3B7-4D68-83D6-6610F5619D82.jpeg",
      "73286F9A-9145-4E4B-ACB4-FC4CC5CA90F4.jpeg",
    ],
    name: "Baby Food Feeder",
    price: 300,
    discountedPrice: 220,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "99982E37-1950-4A7E-95F3-EB6794AFE2A1.jpeg",
      "35A5F2D3-9FB8-431C-95FD-906024D37CD8.jpeg",
      "CE40835D-1E06-41CA-ACA6-9D213CDE2091.jpeg",
      "FF108397-E4CF-4508-A00F-7AFD588B97E2.jpeg",
      "AFBA9F67-453A-451F-B9EE-686BCFFCBB4B.jpeg",
      "08F72792-47C3-42EA-9545-2F136225D129.jpeg",
      "30D9CB15-D4E2-4122-8B54-F403FEBBB886.jpeg",
      "C7A55FF7-0B38-4782-B99C-A5B762A22DB8.jpeg",
      "5FE439EF-808C-440E-862E-642C7ADCB7B1.jpeg",
    ],
    name: "Soft Comb with Brush",
    price: 399,
    discountedPrice: 275,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "B0880134-1DB8-4A36-8499-18172BF86DE3.jpeg",
      "12252FC9-F4DC-4FB5-8588-31755D12BA0A.jpeg",
      "9DC48709-2FF6-49C2-9F33-EFBABD66B7EB.jpeg",
      "D911DA47-BAE3-4FFA-8661-47BA308FF69C.jpeg",
    ],
    name: "Baby Comb & Brush Set",
    price: 400,
    discountedPrice: 195,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "124C5D6A-10F7-435B-A482-4535488B7B9D.jpeg",
      "AE3D9094-80F0-436F-81AF-FFFB38E7B648.jpeg",
      "6698C02E-E595-44E6-9BED-C2825CAC38A4.jpeg",
    ],
    name: "Medicine Feeder",
    price: 110,
    discountedPrice: 69,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "D28C3DF3-68F8-49C7-81E4-19C6C534F9FF.jpeg",
      "0026DA6F-E97F-4B5D-BCBE-8FE9A459CECD.jpeg",
      "6340E693-8EF8-4C74-BB05-6F4273804F52.jpeg",
      "34D2DED6-0719-429B-8894-0FECDDEAA37B.jpeg",
    ],
    name: "Medicine Dropper",
    price: 200,
    discountedPrice: 99,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "B1C63918-02BF-40F8-8480-F89B834569E7.jpeg",
      "A5AF68D9-E4CE-4456-A509-DD093BA25E3A.jpeg",
      "1C2B8B26-D133-45A2-9238-D72EB85B6890.jpeg",
      "0DBE75AF-6958-4C85-99BA-6CBD8155482C.jpeg",
      "FBFDB99C-EA59-425A-9BE0-95B10DD65526.jpeg",
      "49026231-8058-4DAD-96F2-FDA749C9C5D4.jpeg",
    ],
    name: "Advance Baby Nose Cleaner",
    price: 400,
    discountedPrice: 235,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "1A89C943-C3F4-428B-9317-F911F188B8CF.jpeg",
      "18B4F556-47C1-42B0-BAB4-D7155D25531B.jpeg",
      "4315EB45-A052-4BBC-AA47-EB7AF5418BCA.jpeg",
    ],
    name: "Hand Gloves Silicone Teether",
    price: 499,
    discountedPrice: 250,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "D1BCB74B-2123-43E4-87B9-1BEEF866FFC4.jpeg",
      "2E0709E6-E38A-4DFA-9377-4358B6F088BE.jpeg",
      "C25156A8-B525-4EEA-897F-C0A22F3DF4E1.jpeg",
      "FD3A7C5C-A6AC-4C89-9080-6578D136A7F0.jpeg",
      "243A1194-7577-4034-BA08-DFAF9E539260.jpeg",
    ],
    name: "Hand Gloves Silicone Teether",
    price: 300,
    discountedPrice: 160,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "60C7E0BB-2E8F-4BF9-9D31-A345904C2448.jpeg",
      "AD34FBC6-318B-466C-AB5B-8D5A1843D19A.jpeg",
      "Babynail1.jpg",
      "Babynail2.jpg",
    ],
    name: "Baby Nail Trimmer",
    price: 400,
    discountedPrice: 249,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "A7CDAD02-EA78-4C11-9435-174B59746ECA.jpeg",
      "27352CF0-9CBC-48C2-9B68-071F837F99B0.jpeg",
    ],
    name: "Baby Water proof PlayMat",
    price: 1200,
    discountedPrice: 600,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "9F918437-1A1E-4F4E-A916-70D897D2C1DD.jpeg",
      "104F4490-C107-4398-97B5-FD20B4B082D0.jpeg",
    ],
    name: "Premium Water proof PlayMat",
    price: 1799,
    discountedPrice: 850,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "DDD3C5B1-EFD6-45D5-916B-01B3E191D090.jpeg",
      "3134BB60-B7C1-47DD-A6F5-B138E8A3B714.jpeg",
      "68046006-AE19-42A4-B121-48DA6A5167E9.jpeg",
    ],
    name: "Double side Water proof PlayMat",
    price: 1999,
    discountedPrice: 980,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "C0B0D72A-0F8B-41D8-B476-28D98BE25E3E.jpeg",
      "6D2940B0-C607-4B41-B25E-2E443EB7D0BE.jpeg",
      "FB410634-EA87-4358-B257-D06E32656F1D.jpeg",
      "9EC048F3-1EEB-4DAD-9989-C12DD6CA6828.jpeg",
      "1864A23A-BDE8-4C52-A17F-E95A3CD5541F.jpeg",
      "6190A6D7-E9F5-47ED-BEDA-917F49E6145A.jpeg",
      "69D3A6C6-13DE-40BC-AADD-603F709243E4.jpeg",
    ],
    name: "2 in 1 Round Potty Chair",
    price: 1500,
    discountedPrice: 820,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "F03A14CE-251A-4A41-9E47-3C11D2FED553_web.jpeg",
      "E8D8CC5C-823D-434E-A734-6B1D8DFAB4D8_web.jpeg",
      "09766CB1-6B75-4216-8C1E-C4E5E806C2FF_web.jpeg",
      "0C531F47-2B3B-407D-858C-E2FE381762B7_web.jpeg",
      "EA6E75D1-E9F3-46EA-B2BC-B0DC7EF49D93_web.jpeg",
      "76181ADA-5113-4880-B402-8F42E275B265_web.jpeg",
      "7B87759C-1706-4128-85C6-0292838C9B84_web.jpeg",
      "8759621F-2408-4681-87F0-85B992852310_web.jpeg",
      "80796D26-67A9-4BD9-A374-7F195B163CD9_web.jpeg",
      "FBC70C43-AD43-4AF2-A2C8-BF76DD56ABD4_web.jpeg",
      "B6BAD610-41E6-4A1C-AE25-AADA87363045_web.jpeg",
      "E4D901AA-2E11-45C1-94AE-71AA3D6A2336_web.jpeg",
      "31577093-8F06-4382-BEAC-9EA20DB365D9_web.jpeg",
    ],
    name: "Toy Brush",
    price: 189,
    discountedPrice: 99,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "06BB9E96-962D-4968-A6B3-6E9FB393A590_web.jpeg",
      "69BA2381-3062-4024-B999-77BB825D78A5_web.jpeg",
      "9EE829F4-803A-4FC1-A187-BB1F494DF134_web.jpeg",
      "BBC3FFBE-98FA-4E70-A672-507140FDD54A_web.jpeg",
      "D8608E52-2EEF-40E9-BAE4-C68ABE45C1D1_web.jpeg",
      "31E0D195-3585-4D7C-B592-2BB4D12D8A8B_web.jpeg",
      "64555B51-B5DF-4D33-B531-8D06F1CF58B3_web.jpeg",
      "51B0B824-5903-4B79-9B89-F6C8EC46010B_web.jpeg",
      "F78E01CD-1DE8-460C-86E2-CC041E0F6BBE_web.jpeg",
      "86D4BC86-B8FA-406A-B9CC-CD5861ECAF06_web.jpeg",
      "E3044DFF-A369-4767-8BDB-65C50FEF3D44_web.jpeg",
      "E4614777-D87F-4FEC-B0B8-CC480E56FB19_web.jpeg",
    ],
    name: "New Product 3",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "236BB3E7-25C9-4243-AB37-6B7F014BAD7E_web.jpeg",
      "84039818-0D3F-467E-9A9A-D200AB9DACAA_web.jpeg",
      "9C0EBEDD-21CF-4E56-9883-37131AFD41C0_web.jpeg",
      "1902A331-E449-4768-AAEA-79B46A30FDF3_web.jpeg",
      "35594058-4BA6-483E-99F5-E8240B95CD3B_web.jpeg",
      "B6471652-E3D1-40D2-9F2E-BF624DADCE71_web.jpeg",
      "EEFE0860-90A5-4E0B-861A-2806992BC5FE_web.jpeg",
      "AF0FD796-C71A-4A95-B231-8AF5EB781C09_web.jpeg",
      "B4294463-53A8-456A-A7FE-C17E6614A704_web.jpeg",
      "A7BB8B15-4F87-46CB-8332-B5C5BB938C40_web.jpeg",
      "AF2969D7-1287-47EC-ACD8-AF41CEEB0952_web.jpeg",
      "403FC6DC-03BB-4F34-AE10-5BF6387C65A4_web.jpeg",
      "02EF164B-F8B2-4910-B304-538261C94C7B_web.jpeg",
      "B0FD92A1-8AF6-40BD-97B3-A37C1C75F6A7_web.jpeg",
      "02DC8D77-6DFD-43DD-8F30-7BA508715BBD_web.jpeg",
    ],
    name: "New Product 4",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "05E12068-6FAE-4E55-A901-187068A0E79A_web.jpeg",
      "1AB9549A-6C1E-4662-A94F-7C92326001FF_web.jpeg",
      "10D62BC5-6990-4E39-B189-7755DB85C9D4_web.jpeg",
      "29A44CC6-8034-4BF2-BA1E-A2EFE3A0F20A_web.jpeg",
      "A61D7157-5395-48EE-9F4D-3A82538F2855_web.jpeg",
      "D0579576-A43E-4B18-8C62-817E9044F3EE_web.jpeg",
      "AD9DE50F-98B2-4B2F-8A44-D404B21E62DE_web.jpeg",
      "D324E3F6-6006-413A-BEC0-DD583FC91ED3_web.jpeg",
      "36E09CE0-CF91-4539-A81A-F47B9B32B013_web.jpeg",
    ],
    name: "New Product 5",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "AA5694D8-07CC-4665-9BC2-73D0E03EC623_web.jpeg",
      "32370F28-9F7F-4108-A17C-5F21773244AA_web.jpeg",
      "979CDB8B-70D9-414D-9662-8E2DE3B57E10_web.jpeg",
      "8D54918E-6742-4B64-9D08-17F48AE4A894_web.jpeg",
      "47F5CE35-AA48-4AA6-BC42-2C940EF5D5BE_web.jpeg",
      "784A8A50-EF12-4BFA-A595-E8DD022F60B7_web.jpeg",
      "C3039E6C-77EA-43AD-AF53-FD019E350109_web.jpeg",
      "31992E67-D0EA-430A-914C-725F6B93D60B_web.jpeg",
      "71999B8A-EB8C-458D-B40D-34CFA669F251_web.jpeg",
      "C6163BDC-67E7-4520-9CDF-B0D56297960A_web.jpeg",
    ],
    name: "New Product 6",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "0558B0EF-A327-4640-A0F5-ED65CCE949E6_web.jpeg",
      "8FC9EE9B-E2B9-46F6-B5E7-CE93ABB3C118_web.jpeg",
      "6E8237A4-24CE-45E7-B874-B5F2D3DAE697_web.jpeg",
      "AB4CF1B7-F69D-4A96-B18D-F68E04B5C7B4_web.jpeg",
    ],
    name: "New Product 7",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "FF43E5C0-067C-4830-AADF-0DCECF5A7729_web.jpeg",
      "0109A162-08B0-40C2-8F5A-3F87C116E38F_web.jpeg",
      "2BAE210A-07F5-4B0F-8845-D95FB9A1F0B1_web.jpeg",
      "7263CE53-72AB-41B2-9487-637A251801A9_web.jpeg",
      "728F2B8C-1040-4A5B-8041-7DEFB4D5196C_web.jpeg",
      "0F01A77F-BFB3-4F3C-AB76-803D697E435E_web.jpeg",
      "93C12933-94BC-469A-9AC9-F4A24C3FEA13_web.jpeg",
      "B845485F-83F4-4154-BB79-0E4E79098783_web.jpeg",
      "EE7F03D7-10F9-4DCA-A22C-4FF3482CB19E_web.jpeg",
    ],
    name: "New Product 8",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "4AE094D8-54C6-49A3-A6E5-5DDF8C319F6B_web.jpeg",
      "0DDC8D37-2E11-43A1-9748-4F4F92432AF0_web.jpeg",
      "81E04E5E-BCB8-4B56-AD9B-AB487F10E789_web.jpeg",
      "B4E1A3A5-9A69-4D61-8362-C6B4E12D80CC_web.jpeg",
      "6265F634-164A-49E7-BAEA-A784ECE7E28E_web.jpeg",
      "9734800F-C3F6-4E9F-A112-732DBDB89748_web.jpeg",
      "CE63420A-D3EF-49DB-A1CC-16CF9E9A7786_web.jpeg",
    ],
    name: "New Product 9",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "77AB189C-D80C-429C-AF48-7A6A4E195B9D_web.jpeg",
      "CB6F3536-0D47-407D-BBCC-35415D561B83_web.jpeg",
      "D8A51001-D711-499A-A0D4-DF823A4EC3EA_web.jpeg",
      "33443D9D-36C0-4321-98DE-F64BE27F3A81_web.jpeg",
      "1731380F-8C31-4EC1-9888-2090DE85B432_web.jpeg",
      "E99CA40F-96FB-403E-99BA-57C6CAC01E1B_web.jpeg",
      "F4E7F899-70CB-403C-A4FC-EB4B48267901_web.jpeg",
      "5C4CABF6-7FD2-4D5F-ADA2-6EC2503E43C9_web.jpeg",
      "EC8DA665-CD92-43C5-8E7E-92AC4C70EBA0_web.jpeg",
      "890116E5-8A43-4654-A79A-3F9249069D80_web.jpeg",
    ],
    name: "New Product 10",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "A565AF91-7949-4BF8-A557-B41602D9717D_web.jpeg",
      "C6C4B2AA-9541-44B1-934C-367C82453B7D_web.jpeg",
      "4963790F-B89E-4103-8D97-5FFEF2CCE2CE_web.jpeg",
      "07643221-5ED0-4A3E-AA10-96467F1D15A1_web.jpeg",
      "0E92F5C7-FEB7-43CE-B42D-F43B9F489126_web.jpeg",
      "92AA746B-7088-4517-A83B-CC8EF5040271_web.jpeg",
      "B6A0A95E-2CD3-4C07-AEDA-E6B4C7562DEC_web.jpeg",
      "0714D2EE-DA81-437E-BACE-9C91BBDD716F_web.jpeg",
      "5C86540F-C99D-43E9-B5BB-577632C77C75_web.jpeg",
      "99E67A8E-C141-481E-B2B8-B199B3DBA011_web.jpeg",
      "A09B4C06-A425-4103-A083-EE6F130BA0D3_web.jpeg",
    ],
    name: "New Product 11",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "0BAF1552-29B9-41C5-96B0-B0D8C25884E4_web.jpeg",
      "AB6B6D78-16BC-4D7B-A21F-5F2AC04EE82B_web.jpeg",
      "E7645015-1A91-4394-9525-02F3F2793D6A_web.jpeg",
      "FB1A7AAD-8BFA-4B67-BFE4-BC7EBCD1CBAE_web.jpeg",
      "6EEE3FCA-6A78-48B1-9FC1-3F28502691E7_web.jpeg",
      "0567FC24-CBC8-4594-82E0-FABF4B465AAF_web.jpeg",
      "EB27A626-52E8-41F7-B657-B56F9512DAAD_web.jpeg",
      "8116BB2C-CF04-4E75-9F6E-24E565C7216B_web.jpeg",
    ],
    name: "New Product 12",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "D470E851-F5EB-4CDD-B4EC-8688C33BABC5_web.jpeg",
      "64E77BEE-7A48-4327-8191-8072301D799F_web.jpeg",
      "F2F28643-4641-4DD9-9E47-E274A9360C99_web.jpeg",
      "C91793F9-CE56-47F3-A9A6-9592EF4BD289_web.jpeg",
      "96800E94-0239-4413-B4C0-88EFA0DB79FA_web.jpeg",
      "F005D345-595A-488F-BDED-C145859BD070_web.jpeg",
      "F1A7972F-E5C5-449E-B041-43F43FE9145B_web.jpeg",
      "CDD68E38-F61D-420E-B5F0-912107B10049_web.jpeg",
      "F858F45C-FC31-4058-B180-53D72DAC9A3D_web.jpeg",
      "12F835A4-CA3E-492B-B6D8-E66C631848A9_web.jpeg",
      "14B65924-4C7A-4C91-81B0-CEA79022F6FE_web.jpeg",
      "4E60F0CE-721A-4DC2-83B2-0E6347B17591_web.jpeg",
      "B46B0387-7C54-49B0-BE32-502EEEC2B554_web.jpeg",
    ],
    name: "Crinkling Fabric Book",
    price: 999,
    discountedPrice: 680,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "B03DF6C5-6EE0-46EE-A231-3565CD6C50D6_web.jpeg",
      "F4B3BB9D-D934-40FD-8374-36B0B7420C1A_web.jpeg",
      "F5C0B8A7-730F-46FD-892D-1EC1345A42BA_web.jpeg",
      "32EA896C-EBED-49F0-A55C-758B88D44E59_web.jpeg",
      "1CB47E1D-D527-4E64-9FC4-AC9107752FEA_web.jpeg",
      "C950FFB3-5A8E-468D-B4AF-9FD75AAEB56E_web.jpeg",
      "7BF25AB8-D208-47B7-9139-70830525BB1B_web.jpeg",
      "C37D797A-3436-45B9-BB97-99AEF8E644D4_web.jpeg",
      "259FC1C3-7023-4B94-93F3-0285A4127253_web.jpeg",
      "3DD7B4F8-0DAA-4471-B8A3-B048BFFD0EA6_web.jpeg",
      "96AD5651-CFC8-4897-B449-622DAB1F6854_web.jpeg",
      "11BFD2B3-7521-4461-977D-42A07C623022_web.jpeg",
      "23C71A8F-E5B8-4BA0-8DE7-37753661CCEA_web.jpeg",
      "5F8DE1ED-75E2-43EB-ADD0-10ADE1CFE301_web.jpeg",
      "78F1C376-3C7C-479E-B1C2-A5FFDA4DC586_web.jpeg",
      "D648DE94-0794-4902-A790-7240F51D3145_web.jpeg",
      "5D9D8F3D-DBFB-4940-8E6B-78E3EFF303C3_web.jpeg",
      "8B578451-BEEF-4E7E-811A-A1F6E8457EF0_web.jpeg",
      "5EFDDED1-2BEF-4322-A21A-B51EF991A90A_web.jpeg",
      "6564F5B7-F345-464C-809E-7A79238FA6AE_web.jpeg",
      "136BE525-8E67-4E92-A910-750B9B3D262E_web.jpeg",
      "591CBD18-668F-44D8-8439-DC7007E0DBCB_web.jpeg",
      "875C5BE8-8D36-4CCA-85B9-5704509B9EAE_web.jpeg",
    ],
    name: "New Product 15",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "E976555B-25B5-477E-8FE3-34C61FB7A4C0_web.jpeg",
      "9E484D35-6A20-41DF-9C33-0B5A18678DF5_web.jpeg",
      "E03E20B0-B251-4282-943C-9C86DDB05166_web.jpeg",
      "EF44B381-21FA-4E07-8132-578C47B0A963_web.jpeg",
      "1E14A1B8-6DDE-4435-9E33-6BF28E73F3B9_web.jpeg",
      "D6990580-B250-4321-A687-1687E19D4BC4_web.jpeg",
      "9BA988CE-87FC-430E-B2E7-E77F93853431_web.jpeg",
      "AFAC5693-768F-4EEA-A9C5-383D133F2FC1_web.jpeg",
    ],
    name: "New Product 17",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "7DC66721-D018-422B-84A4-965A9F2F5217_web.jpeg",
      "9FB73633-CA61-4B94-8292-5F1DD9B0B7C2_web.jpeg",
      "7D22EB17-EA9B-4320-9346-D440D83E5C87_web.jpeg",
      "F9B57A71-9943-4702-B1DA-DFDB843C9DBE_web.jpeg",
      "D2697158-98D7-46B4-9422-C1B7C78AB284_web.jpeg",
      "D6705D74-1EDF-4036-B2B7-595181651645_web.jpeg",
    ],
    name: "Cloth Activity Book",
    price: 999,
    discountedPrice: 680,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "9B3C20DE-6A29-45AB-9593-5339A951C795_web.jpeg",
      "9BF6F0BE-D05D-4AAE-9CB1-57DC770CE0F9_web.jpeg",
      "D438E223-D1EC-49BD-B04D-7BA649BB3CB9_web.jpeg",
      "32E28888-5F65-4A2F-BF93-28EB2F87B1EC_web.jpeg",
      "6025FEE9-9467-4615-9639-B33E9B708101_web.jpeg",
      "B168CC11-3933-497C-A35E-EF716BAFB6FD_web.jpeg",
      "C8F294D4-39CE-42F1-A49A-7CD29F1E1D53_web.jpeg",
      "DB3B19AE-1F66-4B45-9DC7-F67EC0DEEFEA_web.jpeg",
      "796FF2B7-09FC-4AFC-8F33-9EF0E50E31C1_web.jpeg",
      "33AFAFD4-2BB9-4C26-B2EF-F9CEA8266720_web.jpeg",
      "DFFCD5FD-5BB9-4F40-A997-CE6B3C372D81_web.jpeg",
    ],
    name: "New Product 21",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "6E7FB3FA-056F-4508-AC22-60E481F5721E_web.jpeg",
      "EC96BE46-103A-4676-A2ED-A3212A3322BA_web.jpeg",
      "CACA7516-5D3E-4D82-A193-1FF343862522_web.jpeg",
    ],
    name: "Musline Langod",
    price: 150,
    discountedPrice: 85,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "5B96D7BF-B445-458B-85B6-6230E8BF4458_web.jpeg",
      "9386E4D0-BD5D-419D-9144-7DA6CD8309A8_web.jpeg",
    ],
    name: "Jabla Musline Button knot",
    price: 150,
    discountedPrice: 95,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "BA58D835-8D00-48EA-9B55-1E199314B16B_web.jpeg",
      "CE329CAF-8A20-4A77-AD78-A5E823329642_web.jpeg",
    ],
    name: "Jabla Musline knot",
    price: 150,
    discountedPrice: 85,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "74D24377-84E1-4128-9A5B-135E6333A6B3_web.jpeg",
      "FC543550-6E15-4736-9A3C-4A30EE6C7AC0_web.jpeg",
    ],
    name: "Musline Hoodie towel",
    price: 350,
    discountedPrice: 260,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "71DCFF86-B2A0-444F-87E8-A3E2D32CD28F_web.jpeg",
      "EB25DDA4-0027-4047-A7BF-419E57ED1605_web.jpeg",
    ],
    name: "Musline towel",
    price: 299,
    discountedPrice: 210,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "1046B71B-4E90-4344-8B46-019FB9E7B09E_web.jpeg",
      "AA62EC84-4749-4CE5-B88C-8DC58E5AD2D9_web.jpeg",
      "F38515D7-9150-4227-99C8-4F2EC2B7AF7A_web.jpeg",
      "8695E0D3-C9E3-4D08-BF6C-B2E33DFE79C1_web.jpeg",
      "A8134BF0-7F04-4142-9359-67CA9367C5A1_web.jpeg",
      "BAD5D162-439E-4403-9798-8F91B48A8E18_web.jpeg",
      "40C6A2C3-C339-4D2C-9979-ECD4E6D419E5_web.jpeg",
      "56A7295A-AE82-4850-ACD2-F31A1A0E7FFE_web.jpeg",
      "798B2814-07F8-4501-B418-63D5EE4092D3_web.jpeg",
      "E37398D4-12EE-4BAB-BA71-8679770F5142_web.jpeg",
      "F82B3E77-7A47-43B8-8B4E-C22EB40EEC5B_web.jpeg",
      "4D0FF27F-F067-4DEB-8F92-C3D4C6BA8E72_web.jpeg",
      "550EBE34-D8C1-43D2-8264-44099D4FF3A0_web.jpeg",
      "712D7FD6-B222-4D0B-896F-55A734355A05_web.jpeg",
    ],
    name: "Cartoon Panty",
    price: 330,
    discountedPrice: 200,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "04F29825-6EBD-4C95-9115-4389B3BBAA9B_web.jpeg",
      "5D46B098-9F25-4113-BC20-0DE1C7FA2E63_web.jpeg",
      "16F43199-4CAB-42D6-8D95-4933819D07DD_web.jpeg",
      "54B0F77F-E47A-4375-A9C0-3279CD921D22_web.jpeg",
      "73484ABB-8946-454E-AC1D-4716886D9F27_web.jpeg",
    ],
    name: "Training Panties",
    price: 250,
    discountedPrice: 160,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "9FD23186-3157-4FCC-85EF-AC9E2582113F_web.jpeg",
      "119EC81C-2AB5-4333-94CC-EE6D010946A3_web.jpeg",
      "67E95ECC-208F-4603-AB94-0FF5B0919B7F_web.jpeg",
      "A5EB3FC5-DFDF-42A1-9A34-69B7503B4AC1_web.jpeg",
      "6917AD04-EB4D-406C-A1FA-89D87E3FB5F3_web.jpeg",
      "CD9C2DD2-F035-4F9F-A012-2E2E8DEDFE6F_web.jpeg",
    ],
    name: "New Product 29",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "8D6DA446-8A8B-49DE-ACE3-89BCFCE60CB7_web.jpeg",
      "102985EB-2C9E-45B5-9549-E4EED72E6585_web.jpeg",
      "E3D4D367-207A-4223-8E2A-1F22EAD10522_web.jpeg",
      "891E2C04-2DA9-4B71-9C4E-EFC2F8231036_web.jpeg",
      "97F93934-5334-4907-8B83-BDC622EB1656_web.jpeg",
    ],
    name: "Baby Training panties",
    price: 299,
    discountedPrice: 230,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "5F120D35-9C0A-4C2F-AB19-1ED08818F67D_web.jpeg",
      "CEE913DB-9211-4CFA-A0D9-5B824D001949_web.jpeg",
      "0089A450-447F-41AB-95E8-16B9737357B8_web.jpeg",
      "10DFBF9A-4839-49DB-A359-F072E8F14B54_web.jpeg",
      "30F69333-7AEA-4B54-B748-C5817ACECF12_web.jpeg",
      "6DBE75EF-50FD-41B5-A796-E45163CE473D_web.jpeg",
      "D44512C1-D951-4874-B19E-7A7D1D637252_web.jpeg",
    ],
    name: "Baby Foot Stamp",
    price: 169,
    discountedPrice: 112,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  // {
  //   images: [
  //     "A855679C-C66D-4AC1-9906-B1E1E51C187F_web.jpeg",
  //     "B38E7880-4EFF-4192-A1D6-56649167F5CA_web.jpeg",
  //     "2ABB0658-8C2C-4262-94A3-1FE66B0233ED_web.jpeg",
  //   ],
  //   name: "New Product 32",
  //   price: 999,
  //   discountedPrice: 499,
  //   features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  // },
  // {
  //   images: [
  //     "8F91022C-6ACD-4BC7-BB32-C518B496C161_web.jpeg",
  //     "2BE480BC-D7F8-4B96-A8B1-0936197538EF_web.jpeg",
  //     "33457D1D-DCB8-49F7-B9F0-126C4F90CA52_web.jpeg",
  //   ],
  //   name: "New Product 33",
  //   price: 999,
  //   discountedPrice: 499,
  //   features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  // },
  // {
  //   images: ["8A9B5E0B-F1B7-4982-95FB-263E67CFEC0B_web.jpeg"],
  //   name: "New Product 34",
  //   price: 999,
  //   discountedPrice: 499,
  //   features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  // },
  {
    images: [
      "28BD6800-2139-48B1-B349-598E6C226045_web.jpeg",
      "D5ABA710-4014-4403-9007-F4B5911C1661_web.jpeg",
    ],
    name: "New Product 35",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  // {
  //   images: [
  //     "EDE11DB9-E22C-459D-9410-C5BBE58C2335_web.jpeg",
  //     "11A4BA05-EB7C-495A-A1D3-D5FA1F81986F_web.jpeg",
  //     "3EE86AF3-3F17-4B7E-9CDD-DA2795730E9C_web.jpeg",
  //     "3DC0185B-C55A-4852-BA58-3B5B916BEA99_web.jpeg",
  //     "473C7760-E946-452E-AB83-9C16A216AB56_web.jpeg",
  //     "D491AB4B-78ED-4079-8681-16FD9927FB86_web.jpeg",
  //   ],
  //   name: "New Product 36",
  //   price: 999,
  //   discountedPrice: 499,
  //   features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  // },
  {
    images: [
      "5CAF6CA8-DC2B-481B-A828-41120955A190_web.jpeg",
      "D30412EF-B603-4EB6-A869-2C444069CB53_web.jpeg",
    ],
    name: "New Product 37",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "363E4C48-1FE4-49C2-8646-F2D4A57B274D_web.jpeg",
      "3AEAFE76-E111-4BA1-9462-A57119139A8A_web.jpeg",
      "A2ACA980-866E-4010-9994-8E1547AE07B0_web.jpeg",
      "6D6B86A5-950D-4231-87D9-27C04EBE8847_web.jpeg",
    ],
    name: "New Product 40",
    price: 999,
    discountedPrice: 499,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "9F1411B8-162A-463B-91E2-FE781CE02610_web.jpeg",
      "4670B281-8F6A-482F-A04B-5806F1756FA9_web.jpeg",
    ],
    name: "Feeding Pillow",
    price: 1199,
    discountedPrice: 830,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
  {
    images: [
      "68573D59-1689-43BC-A4C8-D592E44FA0C8_web.jpeg",
      "68B0FF38-BA0A-48EC-B0FB-E57556C93D21_web.jpeg",
      "EC1965FC-733D-4FC4-8EDA-5B8F66B58BA9_web.jpeg",
      "58DAECE1-FB49-48BB-8490-8B8BC496D030_web.jpeg",
    ],
    name: "Kids Bathing Sofa",
    price: 999,
    discountedPrice: 589,
    features: ["Premium Quality", "Safe for Babies", "Beautiful Design"],
  },
];

// ============================================================================
// APP LOGIC
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products-container");
  const noProductsMessage = document.getElementById("no-products-message");

  // Check if we have any products listed
  if (productImages.length === 0) {
    noProductsMessage.classList.remove("d-none");
    return;
  }

  // Render each product
  productImages.forEach((product, index) => {
    const displayName = product.name;
    const imageFilename =
      product.images && product.images.length > 0
        ? product.images[0]
        : product.filename;

    const priceOriginal = product.price ? "₹" + product.price : "";
    const priceDiscounted = product.discountedPrice
      ? "₹" + product.discountedPrice
      : "";

    // 1. Create the WhatsApp URL with pre-filled message
    let message = `Hi, I am interested in the ${displayName}. Could you please provide more details?`;
    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // 2. Create the Bootstrap Card HTML
    const colDiv = document.createElement("div");
    colDiv.className = "col-sm-6 col-md-4 col-lg-3";

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
                        ${priceOriginal ? `<span class="price-original text-muted text-decoration-line-through me-2">${priceOriginal}</span>` : ""}
                        ${priceDiscounted ? `<span class="price-discounted text-success fw-bold fs-5">${priceDiscounted}</span>` : ""}
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
  const modalBody = document.getElementById("productModalBody");

  if (!productModalInstance) {
    productModalInstance = new bootstrap.Modal(
      document.getElementById("productModal"),
    );
  }

  // Generate carousel HTML if multiple images, else just img
  let imagesHtml = "";
  const imgs = product.images || [product.filename]; // fallback
  if (imgs.length > 1) {
    let indicators = "";
    let items = "";
    imgs.forEach((img, i) => {
      indicators += `<button type="button" data-bs-target="#productCarousel" data-bs-slide-to="${i}" class="${i === 0 ? "active" : ""}" aria-label="Slide ${i + 1}"></button>`;
      items += `
                <div class="carousel-item ${i === 0 ? "active" : ""}">
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

  const priceOriginal = product.price ? "₹" + product.price : "";
  const priceDiscounted = product.discountedPrice
    ? "₹" + product.discountedPrice
    : "";

  let featuresHtml = "";
  if (product.features && product.features.length > 0) {
    featuresHtml = '<ul class="product-features-list mt-3 list-unstyled">';
    product.features.forEach((f) => {
      featuresHtml += `<li class="mb-2"><i class="fa-solid fa-check text-success me-2"></i> ${f}</li>`;
    });
    featuresHtml += "</ul>";
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
                    ${priceOriginal ? `<span class="price-original text-muted text-decoration-line-through me-2 fs-5">${priceOriginal}</span>` : ""}
                    ${priceDiscounted ? `<span class="price-discounted fw-bold fs-3" style="color: var(--mint) !important;">${priceDiscounted}</span>` : ""}
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
};
