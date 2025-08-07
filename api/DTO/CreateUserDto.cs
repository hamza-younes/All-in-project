using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTO
{
    public class CreateUser
    {
        public string Name { get; set; } = string.Empty;
        public int Ranks { get; set; }
        public int TotalGames { get; set; }
        public int Followers { get; set; }
    }
}