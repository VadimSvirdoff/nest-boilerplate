import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
// import { LoggerModule } from './logger/logger.module';
import { ConfigModule } from './config/config.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, ConfigModule, CompanyModule],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
