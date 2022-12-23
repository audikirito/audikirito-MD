case 'neonime':
					frhan.updatePresence(from, Presence.composing) 
					data = await fetchaditya(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
