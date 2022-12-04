let handler = async m => m.reply(`
*SEASON 1 LEADING BOARD*

🏅 Rank 5 Level
1 - @62895394997222 Level 600+
2 - @628819405330 Level 500+
3 - @6281347927862 500+
4 - @Unknown
5 - @Unknown

🎟️ Rank 5 Limit
1 - @Unknown
2 - @Unknown
3 - @Unknown
4 - @Unknown
5 - @Unknown

💵 Rank 5 Money
1 - @62895394997222 100 Million+
2 - @Unknown
3 - @Unknown
4 - @Unknown
5 - @Unknown

🥇 Rank 5 Win Fight
1 - @62895394997222 Win 258
2 - @628819405330 Win 211
3 - @6281223937500 Win 170
4 - @6289692015910 Win 142
5 - @6285966400399 Win 119

ℹ️Information
Unknown = Tidak Diketahui/Kosong

*NOTES FOR USERS 🌿*
*Hadiah akan dikirim di akhir season 2*
*Thank You...*


❣️ From Kitsune
`.trim()) // Tambah sendiri kalo mau


handler.help = ['historical1']
handler.tags = ['main','rpg']
handler.command = /^historical1$/i
handler.register = true
handler.premiun = false
export default handler