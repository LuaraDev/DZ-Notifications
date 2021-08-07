RegisterNetEvent('dz-notify:client:notify')
AddEventHandler('dz-notify:client:notify', function(text, type, length)
	SendNUIMessage({
		text = text or "Undefined",
		color = type or 1
	})
end)