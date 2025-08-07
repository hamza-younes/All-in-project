using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO;
using api.Models;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api.Mappers
{
    public static class UserMapper
    {

        public static UserDto ToUserDto(this User userdto) {
            return new UserDto
            {
                Id = userdto.Id,
                Name = userdto.Name,
                Ranks = userdto.Ranks,
                TotalGames = userdto.TotalGames,
                Followers = userdto.Followers,
            };
        }


        public static User ToUserFromCreateDto(this CreateUser createUser)
        {
            return new User
            {
                Name = createUser.Name,
                Ranks = createUser.Ranks,
                TotalGames = createUser.TotalGames,
                Followers = createUser.Followers,
            };
        }
    }
}